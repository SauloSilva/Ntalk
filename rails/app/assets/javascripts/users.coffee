window.nameFunction = ->
  alert 'testando funcao global'

class window.User
  constructor: ->
    @inputId =  $('input.user_id')
    @button = $('button.get_user')
    
    @name = $('input.name')
    @email = $('input.email')
    @action()
    
    $(this).bind('sendData', (event, data) ->
      console.log data
    )
    
    $(this).bind('load', (event) ->
      console.log 'loader com eventos'
    )
    
    
  action: ->  
    @button.click =>
      val = @inputId.val()
      @get(val)
      @style()
  
  style: ->
    @email.css({ 'border', '3px solid #ff0000'; 'background', '#ccc' })
    
  get: (val) ->  
    $.ajax
      type: 'GET'
      url: 'user'
      data: {id: val}
      beforeSend: =>
        @loader()
        console.log 'load sem disparo de eventos'
      success: (data) =>
        setTimeout( =>
          @sucess(data)
        , 3000)
        
        @foo()
      error: (xhr) =>
        @error(xhr)
      complete: =>
        @complete()
  
  loader: ->
    setTimeout( =>
      $(this).trigger('load')
    , 1000)
    
  foo: ->
    console.log 'foo'
    
  sucess: (data) ->
    $(this).trigger('sendData', data )
  
  
  afterTrigger: (data) ->
    @name.val( data.name )
    @email.val( data.email )    
  
  error: (xhr) ->
    console.log("deu erro status: #{xhr.status} ") 
    
  complete: ->
    console.log('nossa requisicao terminou')