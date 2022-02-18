# Jax

Jax, the easiest way to write html code for your websites, anonymously, easily, and securely.

# Documentation:
### Jax is so easy to learn, let's start by the keywords:
* A keyword is a hashtag symbol followed by a word, followed by two
<br>guimets, in which we write our arguments inside.
* Each **Keyword** has a unique work to do.<br><br>

1. ``#include <url||packageName>``:<br>
* This Keyword is basically used to import files such as .js, .css...
* You can provide the Package/Library/Plug-in Name and Jax will <br>
automatically get the CDN link as a cdnjs api fetch response, OR:<br>
* Provide the URL of the File directly.
**Example:* <br>
``#include <https://code.jquery.com/jquery-3.6.0.js>`` / ``#include <jquery>``
<br><br>
2. ``#define <variableName, value>``:
* This Keyword defines Jax Variables which we can learn about them later...
**Example:* <br>
``#define <name, Ramy>`` Then: `h1 My name is @name!`

Now, we will learn how to use Jax to create Web Elements:
To create an **h1** tag, you can <br> basically do:<br>
`h1` and if you want to add a class 'red' to it, just add a dot followed by the class name as so:<br>
`h1.red`, now we will add an id for our element, we will use the `#` symbol as we did <br>before with `.`: `h1#myHeader`.
<br>The equivalent of `element#x` is : ``<element id="x">``
<br>The equivalent of `element.y` is : ``<element class="y">``<br>
And finally, if we want to add an attribute to the Element, we can use
the Symbol ``$`` as so:<br>
``button $hovered=false`` which it's equivalent is: ``<button hovered="false">``

***Remember:***
*  You can always combine all the last Symbols as so:<br>
``element.active.animated#doWork$data=800``.
* Jax is **line-sensive**.
* Jax is not space-sensive, meaning, you can write spaces between classes and ids:<br>
``element .active   .animated #doWork   $data=800``.

# Working With Modules:
##### Modules are Elements that have special styling, just like *React*, they add elements when getting called in a Jax Code.

* All module names begin with a Capital letter, to be called, just write the Module name as if it was a normal Document Element:
<br>`Card.red #dowork`
* Jax Modules are Buildt using JSON... here is an example of a Jax Module file <br>(.jmon)(Jax Module Object Nation)
```json
"jaxModule": {
    "name": "Cool Card",
    "callingName": "Card",
    "startingElement": "div",
    
    "css": {
        "background-color": "red",
        "transition": "all 1s",
        "padding": "5px"
    },
    
    "selectors": {
        ":hover": {
            "background": "green",
            "border-radius": "5px"
        }
    },
    
    "attribute-list": {
        "enabled": false,
        "required": true
    },
    
    "class-list": "true false",
    "innerContent": "This: (|) is the content!",
    "hasClosingTag": false
    }
```
 
# Some info:
+ Discord Server: [Click here](https://dsc.gg/brcode)

+ My Website: [Click here](https://ramey.ml/l?(s)ramey.ml)

+ Project am working on: [Click here](https://rhpo.github.io/BrainCode/register)

+ Email: me@ramey.ml

+ Instagram: @ramyhadid
## License
[MIT](https://choosealicense.com/licenses/mit/)
