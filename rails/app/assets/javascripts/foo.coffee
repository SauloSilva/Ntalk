window.foo = ->
  alert 'sucesso !!!'


class window.Student
    constructor: ->
      student = 
        name: 'saulo'
        email: 'silva'
      
      array = [1, 'saulo' ,3, 4]
          
      @name(student)
      @exampleFor(array)
      
    name: (options) -> 
      if options.name || options.email
        # console.log("name: #{options.name}")
        # console.log("email: #{options.email}")
      else
        # console.log('nao existe nome para esse objeto')      
        
    exampleFor: (array) ->
      for i in array
        console.log i
      
      # array.shift()
      # array.pop()
      array.slice(3, 2)
      console.log(array)  