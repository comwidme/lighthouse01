import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://lighthouse.example/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete lighthouse book club landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="ko"/i);
  assert.match(html, /등대독서회/);
  assert.match(html, /한 주의 끝,/);
  assert.match(html, /책과 사람/);
  assert.match(html, /매주 금요일/);
  assert.match(html, /11:00/);
  assert.match(html, /13:00/);
  assert.match(html, /본관 3층/);
  assert.match(html, /㈜제주비/);
  assert.match(html, /임직원 누구나/);
  assert.match(html, /사내 메신저 채널/);
});

test("ships site-specific metadata without the starter preview", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /등대독서회 \| 등대독서회|등대독서회/);
  assert.match(html, /og\.png/);
  assert.match(html, /summary_large_image/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
});
