# h3-string

Library for h3-js with String.prototype and Array.prototype



## Table of Contents

* **[Functions](#functions)**
  * [String.prototype](#stringprototype)
    * [valid()](#valid)
    * [type()](#type)
    * [neighbour()](#neighbour)
    * [pentagon()](#pentagon)
    * [resClass()](#resClass)
    * [base()](#base)
    * [getRes()](#getRes)
    * [point()](#point)
    * [polygon()](#polygon)
    * [linestring()](#linestring)
    * [buffer()](#buffer)
    * [ring()](#ring)
    * [edges()](#edges)
    * [direction()](#direction)
    * [res()](#res)
    * [distance()](#distance)
    * [decode()](#decode)
  * [Array.prototype](#arrayprototype)
    * [hash()](#hash)
    * [polyfill()](#polyfill)
    * [compact()](#compact)
    * [uncompact()](#uncompact)
    * [outline()](#outline)
* **[External documentations](#external-documentations)**
  * [h3-js](#h3-js)
  * [Uber H3](#uber-h3)



## Functions


### String.prototype

* * *

<a name="valid"></a>

#### .valid() ⇒ <code>Boolean</code>
Whether a given string represents a valid Hexagon index or Edge index.

**Returns**: <code>Boolean</code> - Whether the index is valid  

| Param | Type | Description |
| --- | --- | --- |
| <code>this</code> | <code>String</code> | H3Index : index of the center hexagon or index of the edge |

**Examples**:
```javascript
"871fb4670ffffff".valid(); // ⇒ true
"1171fb4670ffffff".valid(); // ⇒ true
"871f;4670ffffff".valid(); // ⇒ false
``` 

* * *

#### type()

TODO

#### neighbour()

TODO

#### pentagon()

TODO

#### regClass()

TODO

#### base()

TODO

#### getRes()

TODO

#### point()

TODO

#### polygon()

TODO

#### linestring()

TODO

#### buffer()

TODO

#### ring()

TODO

#### edges()

TODO

#### direction()

TODO

#### res()

TODO

#### distance()

TODO

#### decode()

TODO


### Array.prototype

#### hash()

TODO

#### polyfill()

TODO

#### compact()

TODO

#### uncompact()

TODO

#### outline()

TODO



## External documentations


### h3-js

* [Documentation h3-js](https://github.com/uber/h3-js)


### Uber H3

* [Documentation Uber H3](https://uber.github.io/h3/#/)


