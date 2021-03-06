var Backbone = require('backbone');
var _ = require('underscore');

module.exports = Backbone.Model.extend({
    urlRoot : window.NzbDrone.ApiRoot + '/artist',

    defaults : {
        episodeFileCount : 0,
        episodeCount     : 0,
        isExisting       : false,
        status           : 0
    },

    setAlbumsMonitored : function(albumName) {
        _.each(this.get('albums'), function(album) {
            if (album.albumName === albumName) {
                album.monitored = !album.monitored;
            }
        });
    },

    setAlbumPass : function(seasonNumber) {
        _.each(this.get('albums'), function(album) {
            if (album.seasonNumber >= seasonNumber) {
                album.monitored = true;
            } else {
                album.monitored = false;
            }
        });
    }
});