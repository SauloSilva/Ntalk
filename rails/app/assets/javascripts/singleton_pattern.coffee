# class window.SingletonPattern
#     _instance = undefined
#     
#     @create: ->
#       _instance ?= new SingletonPattern()
#   
#     constructor: ->
#       console.log 'aaaa'
#       
#       elements = ['saulo', 'leandro', 'denis']
#       
#       for element in elements
#         console.log element
# 
#       sizeArr = elements.length - 1
#       
#       for i in [0..sizeArr]
#         console.log elements[i]
#         
# $(sdf).myPlugin(
#   options1: false
# )        

# http://coffeescriptcookbook.com/
$ = jQuery

$.fn.extend

  myPlugin: (options) ->

    settings =
      option1: true
      option2: false
      debug: false


    settings = $.extend settings, options

    return @each () ->
      console.log $(this)
