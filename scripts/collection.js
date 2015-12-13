var buildCollectionItemTemplate = function() {
    var template =
     '<div class="collection-album-container column fourth">'
   + '  <img src="assets/images/album_covers/hanuman.png"/>'
   + '  <div class="collection-album-info caption">'
   + '    <p>'
   + '      <a class="album-name" href="/album.html"> The Colors </a>'
   + '      <br/>'
   + '      <a href="/album.html"> Logic Interstellar </a>'
   + '      <br/>'
   + '      X songs'
   + '      <br/>'
   + '    </p>'
   + '  </div>'
   + '</div>'
     return $(template);
};
$(document).ready(function() {
     // #1
     var $collectionContainer = $('.album-covers');
     // #2
     $collectionContainer.empty();
 
     // #3
     for (var i = 0; i < 12; i++) {
         var $newThumbnail = buildCollectionItemTemplate();
         //
         $collectionContainer.append($newThumbnail);
     }
 });