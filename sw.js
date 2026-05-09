self.addEventListener('fetch', function(event) {
  var url = new URL(event.request.url);

  if (url.pathname.endsWith('/share') && event.request.method === 'POST') {
    event.respondWith((async () => {
      var formData = await event.request.formData();
      var file = formData.get('file');

      if (file) {
        var text = await file.text();
        var cache = await caches.open('share-target');
        await cache.put('/uri-sai/_shared-file', new Response(text));
      }

      return Response.redirect('/uri-sai/', 303);
    })());
  }
});
