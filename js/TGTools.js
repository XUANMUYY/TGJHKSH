var TGTools = TGTools || {};

TGTools.Stage = function()
{
    this.fullscreenSupport = null,
        this.webglSupport = null,
        this.clickEvent = null,
        this.startEvent = null,
        this.moveEvent = null,
        this.endEvent = null,
        this.windowHiddenEvent = null,
        this.inFullscreen = false;

    this.mobile = function()
    {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    this.init = function()
    {
        this.clickEvent = touchSupport ? 'touchstart' : 'click';
        this.startEvent = touchSupport ? 'touchstart' : 'mousedown';
        this.moveEvent = touchSupport ? 'touchmove' : 'mousemove';
        this.endEvent = touchSupport ? 'touchend' : 'mouseup';
        this.windowHiddenEvent = this.getHiddenProperty().replace(/[H|h]idden/,'') + 'visibilitychange';

        this.getWebglSupport();
    };

    this.getWebglSupport = function()
    {
        try
        {
            this.webglSupport = !! window.WebGLRenderingContext && !! document.createElement( 'canvas' ).getContext( 'experimental-webgl' );
        }
        catch( error )
        {
            return false;
        };
    };

    this.toggleFullscreen = function( domElement )
    {
        this.domElement = domElement === undefined ? document.body : domElement;

        if( document.fullscreenEnabled ||
            document.webkitFullscreenEnabled ||
            document.msFullscreenEnabled ||
            document.mozFullScreenEnabled)
        {
            if( !document.fullscreenElement &&
                !document.webkitFullscreenElement &&
                !document.msFullscreenElement &&
                !document.mozFullScreenElement)
            {
                if( this.domElement.requestFullscreen )
                {
                    this.domElement.requestFullscreen();
                }
                else if( this.domElement.webkitRequestFullscreen )
                {
                    this.domElement.webkitRequestFullscreen();
                }
                else if( this.domElement.msRequestFullscreen )
                {
                    this.domElement.msRequestFullscreen();
                }
                else if( this.domElement.mozRequestFullScreen )
                {
                    this.domElement.mozRequestFullScreen();
                }
                this.inFullscreen = true;
                return;
            } else {
                if( document.exitFullscreen )
                {
                    document.exitFullscreen();
                }
                else if( document.webkitExitFullscreen )
                {
                    document.webkitExitFullscreen();
                }
                else if( document.msExitFullscreen )
                {
                    document.msExitFullscreen();
                }
                else if( document.mozCancelFullScreen )
                {
                    document.mozCancelFullScreen();
                }
                this.inFullscreen = false;
                return;
            }

        }
        else
        {
            alert( "Your browser doesn’t support the Fullscreen API" );
        }
    };

    this.enabledFullscreen = function( domElement )
    {
        this.domElement = domElement === undefined ? document.body : domElement;

        if( domElement.requestFullscreen )
        {
            domElement.requestFullscreen();
        }
        else if( domElement.webkitRequestFullscreen )
        {
            domElement.webkitRequestFullscreen();
        }
        else if( domElement.msRequestFullscreen )
        {
            domElement.msRequestFullscreen();
        }
        else if( domElement.mozRequestFullScreen )
        {
            domElement.mozRequestFullScreen();
        }
        this.inFullscreen = true;
        return;
    };

    this.exitFullscreen = function()
    {
        if( document.exitFullscreen )
        {
            document.exitFullscreen();
        }
        else if( document.webkitExitFullscreen )
        {
            document.webkitExitFullscreen();
        }
        else if( document.msExitFullscreen )
        {
            document.msExitFullscreen();
        }
        else if( document.mozCancelFullScreen )
        {
            document.mozCancelFullScreen();
        }
        this.inFullscreen = false;
        return;
    };

    this.windowHidden = function()
    {
        return document[ this.getHiddenProperty() ] || false;
    };

    this.disabledTouch = function( domElement )
    {
        var _domElement = domElement === undefined ? window.document : domElement;
        _domElement.addEventListener('touchstart', function( event ){ event.preventDefault(); }, false );
        _domElement.addEventListener('touchmove', function( event ){ event.preventDefault(); }, false );
        _domElement.addEventListener('touchend', function( event ){ event.preventDefault(); }, false );
    };

    this.enabledTouch = function( domElement )
    {
        var _domElement = domElement === undefined ? window.document : domElement;
        _domElement.addEventListener('touchstart', function( event ){ return true; }, true );
        _domElement.addEventListener('touchmove', function( event ){ return true; }, true );
        _domElement.addEventListener('touchend', function( event ){ return true; }, true );
    };

    this.disabledScroll = function( domElement )
    {
        var _domElement = domElement === undefined ? window.document : domElement;
        _domElement.addEventListener( MouseEvent.MOUSE_WHEEL, function( event ){ event.preventDefault(); }, false );
        _domElement.addEventListener( MouseEvent.DOM_MOUSE_SCROLL, function( event ){ event.preventDefault(); }, false );
    };

    this.addEventListener = function( event, callback, useCapture )
    {
        if ( event === 'fullscreenchange' ) {

            document.addEventListener( 'fullscreenchange', callback, useCapture );
            document.addEventListener( 'mozfullscreenchange', callback, useCapture );
            document.addEventListener( 'webkitfullscreenchange', callback, useCapture );
            document.addEventListener( 'msfullscreenchange', callback, useCapture );

        } else {

            document.addEventListener( event, callback, useCapture );

        };
    };

    this.removeEventListener = function( event, callback, useCapture )
    {
        if ( event === 'fullscreenchange' ) {

            document.removeEventListener( 'fullscreenchange', callback, useCapture );
            document.removeEventListener( 'mozfullscreenchange', callback, useCapture );
            document.removeEventListener( 'webkitfullscreenchange', callback, useCapture );
            document.removeEventListener( 'msfullscreenchange', callback, useCapture );

        } else {

            document.removeEventListener( event, callback, useCapture );

        };
    };

    this.getHiddenProperty = function()
    {
        if( 'hidden' in document ) return 'hidden';

        for( var i = 0; i < prefixes.length; i++ )
        {
            if( ( prefixes[i] + 'Hidden' ) in document )
                return prefixes[i] + 'Hidden';
        }
        return null;
    };

    this.getScreenType = function()
    {
        var mediaScreen = "desktop";

        if ( screen.availWidth > 640 && screen.availWidth <= 1024 ) {

            mediaScreen = "tablet";

        } else if ( screen.availWidth <= 640 || screen.availHeight <= 362 ) {

            mediaScreen = "phone";

        } else if ( screen.availWidth > 1014 ) {

            mediaScreen = "desktop";

        }

        return mediaScreen;
    };

    this.init();
};

TGTools.DOM = function(){}

TGTools.DOM.div = function( id )
{
    if( document.getElementById( id ) == null )
    {
        var _div = document.createElement( 'div' );
        _div.id = id;
        return _div;
    } else {
        return document.getElementById( id );
    }
}

TGTools.LoadingScreen = function( image, chromeExpImage, browser )
{
    var scope = this;

    scope.domElement = TGTools.DOM.div( 'loadingScreen' );

    var imageContainer = TGTools.DOM.div( 'imageContainer' );
    imageContainer.appendChild( image );
    scope.domElement.appendChild( imageContainer );

    var title = TGTools.DOM.div( 'title' );
    title.innerHTML = "ABOVE THE CLOUDS";
    scope.domElement.appendChild( title );

    var subtitle = TGTools.DOM.div( 'subtitle' );
    subtitle.innerHTML = "A mesmerizing journey around the Earth";
    scope.domElement.appendChild( subtitle );

    var creditsText = TGTools.DOM.div( 'creditsText' );
    creditsText.innerHTML = "An interactive experience by <a href='http://www.plus360degrees.com/'>Plus 360 Degrees</a><br>Music by <a href='http://www.seanbeeson.com/'>Sean Beeson</a><br>Text by <a href='http://en.wikipedia.org/wiki/Carl_Sagan'>Carl Sagan</a> from <a href='http://en.wikipedia.org/wiki/Pale_Blue_Dot#Reflections_by_Sagan'>'Pale Blue Dot'</a><br>Beautiful capture of <a href='https://commons.wikimedia.org/wiki/File:Animation_of_Rotating_Earth_at_Night.webm'>Earth at night</a> by NASA";
    scope.domElement.appendChild( creditsText );

    var fakeLoading = TGTools.DOM.div( 'fakeLoading' );
    scope.domElement.appendChild( fakeLoading );

    scope.beginButton = TGTools.DOM.div( 'beginButton' );
    scope.domElement.appendChild( scope.beginButton );

    scope.loadingText = TGTools.DOM.div( 'loadingText' );
    scope.loadingText.innerHTML = "LOADING";
    scope.domElement.appendChild( scope.loadingText );

    var instructions = TGTools.DOM.div( 'instructions' );
    instructions.innerHTML = "Drag around and use the toolbar to explore";
    scope.domElement.appendChild( instructions );

    var chromeExp = TGTools.DOM.div( 'chromeExp' );
    chromeExp.appendChild( chromeExpImage );
    chromeExp.addEventListener( browser.clickEvent, function( event ) {

        window.open('https://www.chromeexperiments.com/experiment/above-the-clouds');
        return false;

    }, false );
    scope.domElement.appendChild( chromeExp );
};