class window.Galery
  constructor: ->
    image = $('a.image')
    
    image.fancybox
      titlePosition: 'outside'
      overlayColor: '#000'
      overlayOpacity: 0.9
      onClosed: ->
        alert 'fechou a foto'