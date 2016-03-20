(function($) {
    CKEDITOR.plugins.add( 'filerimage', {

        onLoad: function() {
            CKEDITOR.addCss(
                'input.cke_dialog_ui_input_text {' +
                    'height: 25px !important;' +
                '}'
            );
        },

        lang: 'en,it,de',
        icons: 'filerimage',
        init: function( editor ) {
            that = this;
            editor.addCommand( 'filerImageDialog', new CKEDITOR.dialogCommand( 'filerImageDialog' ) );

            editor.ui.addButton( 'Filer Image', {
                label: 'Bild einfügen',
                command: 'filerImageDialog',
                toolbar: 'insert',
                icon: 'filerimage'
            });

            if ( editor.contextMenu ) {
                editor.addMenuGroup( 'Filer' );
                editor.addMenuItem( 'imageItem', {
                    label: 'Bild bearbeiten',
                    icon: this.path + 'icons/filerimage.png',
                    command: 'filerImageDialog',
                    group: 'Filer'
                });

                editor.contextMenu.addListener( function( element ) {
                    if ( element.getAscendant( 'img', true ) ) {
                        return { imageItem: CKEDITOR.TRISTATE_OFF };
                    }
                });
            }

            CKEDITOR.scriptLoader.load( '/static/filer/js/addons/popup_handling.js' );
            CKEDITOR.dialog.add( 'filerImageDialog', that.path + 'dialogs/filerImageDialog.js' );

            var dialog = CKEDITOR.dialog.getCurrent();

            $.get('/ckeditor_filer/url_reverse/', { url_name: "admin:filer-directory_listing-last"}, function(data) {

            });
        }
    });
})(django.jQuery);
