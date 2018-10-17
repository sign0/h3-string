# h3-string

Library for h3-js with String.prototype and Array.prototype



## Table of Contents

* **[String.prototype functions](#stringprototype-functions)**
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
* **[Array.prototype functions](#arrayprototype-functions)**
  * [hash()](#hash)
  * [polyfill()](#polyfill)
  * [compact()](#compact)
  * [uncompact()](#uncompact)
  * [outline()](#outline)
* **[External documentations](#external-documentations)**
  * [h3-js](#h3-js)
  * [Uber H3](#uber-h3)



## String.prototype functions

<a name="valid"></a>

### .valid() ⇒ <code>Boolean</code>
Whether a given string represents a valid Hexagon index or Edge index.

* **Sucess Returns**: <code>Boolean</code> - ```true``` or ```false``` | Whether the index is valid  

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

<a name="type"></a>

### .type() ⇒ <code>String</code>
Return the type of index : "hexagon" or "edge" or false if the index is not valid.

* **Success Returns**: <code>String</code> - ```"hexagon"``` or ```"edge"``` | Index type
* **Errors Returns**: <code>Boolean</code> - ```false``` | Whether the index is not valid

| Param | Type | Description |
| --- | --- | --- |
| <code>this</code> | <code>String</code> | H3Index : index of the center hexagon or index of the edge |

**Examples**:
```javascript
"871fb4670ffffff".type(); // ⇒ "hexagon"
"1171fb4670ffffff".type(); // ⇒ "edge"
"871f;4670ffffff".type(); // ⇒ false
``` 

* * *

<a name="neighbour"></a>

### .neighbour(hash) ⇒ <code>Boolean</code>
Return true or false if two hexagon are neighbors.

* **Success Returns**: <code>Boolean</code> - ```true``` or ```false``` | Index are neighbors

| Param | Type | Description |
| --- | --- | --- |
| <code>this</code> | <code>String</code> | H3Index : index of the center hexagon |
| <code>hash</code> | <code>String</code> | H3Index : index of the center hexagon |

**Examples**:
```javascript
"871fb4670ffffff".neighbour("871fb4671ffffff"); // ⇒ true
"871fb4670ffffff".neighbour("871fb03a3ffffff"); // ⇒ false
``` 

* * *

<a name="pentagon"></a>

### .pentagon() ⇒ <code>Boolean</code>
Return true or false if the polygon is pentagon.

* **Success Returns**: <code>Boolean</code> - ```true``` or ```false``` | Index is pentagon.

| Param | Type | Description |
| --- | --- | --- |
| <code>this</code> | <code>String</code> | H3Index : index of the center hexagon |

**Examples**:
```javascript
"871fb4670ffffff".pentagon("871fb4671ffffff"); // ⇒ false
``` 

* * *

<a name="regClass"></a>

### .regClass() ⇒ <code>Number</code>
Return 2 or 3 for the resolution class.

* **Success Returns**: <code>Number</code> - ```1``` or ```2``` | Index is resolution class II or class III.

| Param | Type | Description |
| --- | --- | --- |
| <code>this</code> | <code>String</code> | H3Index : index of the center hexagon or index of the edge |

**Examples**:
```javascript
"871fb4670ffffff".resClass(); // ⇒ 3
``` 

* * *

<a name="base"></a>

### .base() ⇒ <code>Number</code>
Return the base cell for the H3Index.

* **Success Returns**: <code>Number</code> - Between ```0``` or ```122``` | Base cell of H3Index.

| Param | Type | Description |
| --- | --- | --- |
| <code>this</code> | <code>String</code> | H3Index : index of the center hexagon or index of the edge |

**Examples**:
```javascript
"871fb4670ffffff".base(); // ⇒ 15
``` 

* * *

<a name="getRes"></a>

### .getRes() ⇒ <code>Number</code>
Return the current resolution for the H3Index.

* **Success Returns**: <code>Number</code> - Between ```0``` or ```15``` | Current resolution of H3Index.

| Param | Type | Description |
| --- | --- | --- |
| <code>this</code> | <code>String</code> | H3Index : index of the center hexagon or index of the edge |

**Examples**:
```javascript
"871fb4670ffffff".getRes(); // ⇒ 7
```

* * *

<a name="point"></a>

### .point() ⇒ <code>Array</code>
Return the coordinates of the center hexagon.

* **Success Returns**: <code>Array</code> - [Number, Number] | Return the EPSG:4326 coordinates of H3Index center.

| Param | Type | Description |
| --- | --- | --- |
| <code>this</code> | <code>String</code> | H3Index : index of the center hexagon |

**Examples**:
```javascript
"871fb4670ffffff".point(); // ⇒ [48.83959144969484, 2.3171064327484228]
```

* * *

<a name="polygon"></a>

### .polygon() ⇒ <code>Array</code>
Return the 7 coordinates of boundary hexagon.

* **Success Returns**: <code>Array</code> - [[Number, Number], [Number, Number], [Number, Number], [Number, Number], [Number, Number], [Number, Number], [Number, Number]] | Return the EPSG:4326 coordinates of H3Index boundary.

| Param | Type | Description |
| --- | --- | --- |
| <code>this</code> | <code>String</code> | H3Index : index of the center hexagon |

**Examples**:
```javascript
"871fb4670ffffff".polygon();
/* ⇒ 
[[2.314764176066189, 48.851962895082266], [2.300808678864533, 48.84515836634219], [2.303153854350738, 48.83278585664873], [2.319447675404276, 48.82721920249627], [2.3333985555970544, 48.83402292293707], [2.331060231369508, 48.84639410544098], [2.314764176066189, 48.851962895082266]]
*/
```

* * *

<a name="linestring"></a>

### .linestring() ⇒ <code>Array</code>
Return the coordinates of edge hexagon.

* **Success Returns**: <code>Array</code> - [[Number, Number], [Number, Number], ...] | Return the EPSG:4326 coordinates of H3Index edge.

| Param | Type | Description |
| --- | --- | --- |
| <code>this</code> | <code>String</code> | H3Index : index of the edge |

**Examples**:
```javascript
"1171fb4670ffffff".linestring();
/* ⇒ 
[[2.3333985555970544, 48.83402292293707], [2.331060231369508, 48.84639410544098]]
*/
```

* * *

<a name="buffer"></a>

### .buffer(size) ⇒ <code>Array</code>
Return the hashes of hexagon buffering.

* **Success Returns**: <code>Array</code> - [H3Index, H3Index, H3Index, H3Index, H3Index, H3Index, H3Index, ...] | Return all hexagons from a hexagon buffering.

| Param | Type | Description |
| --- | --- | --- |
| <code>this</code> | <code>String</code> | H3Index : index of the center hexagon |
| <code>size</code> | <code>Number</code> | The cell distance for the buffer |

**Examples**:
```javascript
"871fb4670ffffff".buffer(2);
/* ⇒ 
["871fb4670ffffff", "871fb4676ffffff", "871fb4672ffffff", "871fb4673ffffff", "871fb4671ffffff", "871fb4675ffffff", "871fb4674ffffff", "871fb4629ffffff", "871fb462bffffff", "871fb460dffffff", "871fb4609ffffff", "871fb4654ffffff", "871fb4655ffffff", "871fb4646ffffff", "871fb4644ffffff", "871fb4662ffffff", "871fb4666ffffff", "871fb475bffffff", "871fb475affffff"]
*/
```

* * *

<a name="ring"></a>

### .ring(size) ⇒ <code>Array</code>
Return the hashes of hexagon ring (buffer).

* **Success Returns**: <code>Array</code> - [H3Index, H3Index, H3Index, H3Index, H3Index, H3Index, H3Index, ...] | Return hexagons from a hexagon ring buffering.

| Param | Type | Description |
| --- | --- | --- |
| <code>this</code> | <code>String</code> | H3Index : index of the center hexagon |
| <code>size</code> | <code>Number</code> | The cell distance for the buffer |

**Examples**:
```javascript
"871fb4670ffffff".ring(2);
/* ⇒ 
["871fb475affffff", "871fb4629ffffff", "871fb462bffffff", "871fb460dffffff", "871fb4609ffffff", "871fb4654ffffff", "871fb4655ffffff", "871fb4646ffffff", "871fb4644ffffff", "871fb4662ffffff", "871fb4666ffffff", "871fb475bffffff"]
*/
```

* * *

<a name="edges"></a>

### .edges() ⇒ <code>Array</code>
Return the 6 index edges from H3Index.

* **Success Returns**: <code>Array</code> - [H3Index, H3Index, H3Index, H3Index, H3Index, H3Index] | Return 6 H3Index edges from H3Index hexagon.

| Param | Type | Description |
| --- | --- | --- |
| <code>this</code> | <code>String</code> | H3Index : index of the center hexagon |

**Examples**:
```javascript
"871fb4670ffffff".edges();
/* ⇒ 
["1171fb4670ffffff", "1271fb4670ffffff", "1371fb4670ffffff", "1471fb4670ffffff", "1571fb4670ffffff", "1671fb4670ffffff"]
*/
```

* * *

<a name="direction"></a>

### .direction(<destination>) ⇒ <code>Array</code>
The array of 2 H3Index hexagon from unidirectionnal edge (direction) or the unidirectional edge from 2 H3Index hexagons (direction).

* **Success Returns**: <code>Array</code> - [H3Index, H3Index] or [H3Index] | Return 2 H3Index hexagon from H3Index edge or return 1 H3Index edge from 2 H3Index hexagon.

| Param | Type | Description |
| --- | --- | --- |
| <code>this</code> | <code>String</code> | H3Index : index of the center hexagon or index of the edge |
| <code>destination</code> | <code>String</code> | H3Index : index of the center hexagon (required if "this" is index of the center hexagon) |

**Examples**:
```javascript
"1171fb4670ffffff".direction(); // ⇒ ["871fb4670ffffff", "871fb4671ffffff"]
"871fb4670ffffff".direction("871fb4671ffffff"); // ⇒ ["1171fb4670ffffff"]
```

* * *

<a name="res"></a>

### .res(resolution) ⇒ <code>Array</code>
Change the H3Index resolution (up or down).

* **Success Returns**: <code>Array</code> - [H3Index, H3Index, H3Index, H3Index, H3Index, H3Index] | Return 6 H3Index edges from H3Index hexagon.

| Param | Type | Description |
| --- | --- | --- |
| <code>this</code> | <code>String</code> | H3Index : index of the center hexagon or index of the edge |
| <code>resolution</code> | <code>Number</code> | Resolution value between 0 and 15 |

**Examples**:
```javascript
"871fb4670ffffff".res(8);
/* ⇒ 
["881fb46701fffff", "881fb46703fffff", "881fb46705fffff", "881fb46707fffff", "881fb46709fffff", "881fb4670bfffff", "881fb4670dfffff"]
*/

"871fb4670ffffff".res(3); // ⇒ ["831fb4fffffffff"]
```

* * *

<a name="distance"></a>

### .distance(destination) ⇒ <code>Number</code>
Get the cell distance from 2 H3Index hexagon.

* **Success Returns**: <code>Number</code> - Value >= 0 or -1 if the destination is outside the base cell | Return the cell distance between 2 H3Index hexagon from the current resolution. The distance is valid only in the same base cell.

| Param | Type | Description |
| --- | --- | --- |
| <code>this</code> | <code>String</code> | H3Index : index of the center hexagon |
| <code>destination</code> | <code>String</code> | H3Index : index of the center hexagon |

**Examples**:
```javascript
"871fb4670ffffff".distance("871fb03a3ffffff"); // ⇒ 44
```

* * *

<a name="decode"></a>

### .decode() ⇒ <code>JSON</code>
Decode an H3Index (bit).

* **Success Returns**: <code>JSON</code> - JSON values | Return the values inside an H3Index - https://uber.github.io/h3/#/documentation/core-library/h3-index-representations.

| Param | Type | Description |
| --- | --- | --- |
| <code>this</code> | <code>String</code> | H3Index : index of the center hexagon or index of the edge |

**Examples**:
```javascript
"871fb4670ffffff".decode();
/* ⇒ 
{
	cell: [15, "0001111"],
	digits: {
		digit1: [6, "110"],
		digit2: [6, "110"],
		digit3: [4, "100"],
		digit4: [3, "11"],
		digit5: [1, "1"],
		digit6: [6, "110"],
		digit8: [7, "111"],
		digit9: [7, "111"],
		digit10: [7, "111"],
		digit11: [7, "111"],
		digit12: [7, "111"],
		digit13: [7, "111"],
		digit14: [7, "111"],
		digit15: [7, "111"]
	},
	edge: [0, "000"],
	hash: ["871fb4670ffffff", "000100001110001111110110100011001110000111111111111111111111111"],
	mode: [1, "0001"],
	resolution: [7, "0111"]
}
*/
```



## Array.prototype functions


<a name="hash"></a>

### .hash(resolution) ⇒ <code>String</code>
Encode a point coordinates in H3Index from a required resolution.

* **Success Returns**: <code>String</code> - H3Index | Return the H3Index hexagon for a point coordinates.

| Param | Type | Description |
| --- | --- | --- |
| <code>this</code> | <code>Array</code> | Point : EPSG:4326 coordinates (longitude, latitude) |
| <code>resolution</code> | <code>Number</code> | Resolution value between 0 and 15 |

**Examples**:
```javascript
[-122.0553238, 37.3615593].hash(15); // ⇒ "8f283470d921c65"
```

* * *

<a name="polyfill"></a>

### .polyfill(resolution) ⇒ <code>Array</code>
Encode a polygon in a set of H3Index from a required resolution.

* **Success Returns**: <code>Array</code> - H3Index | Return the H3Index hexagons for a polygon coordinates.

| Param | Type | Description |
| --- | --- | --- |
| <code>this</code> | <code>Array</code> | Polygon : EPSG:4326 coordinates (longitude, latitude) |
| <code>resolution</code> | <code>Number</code> | Resolution value between 0 and 15 |

**Examples**:
```javascript
var polygon = [[[2.2442424297,48.8402175497],[2.2992780691,48.8402175497],[2.2992780691,48.8764155228],[2.2442424297,48.8764155228],[2.2442424297,48.8402175497]]];
polygon[0].polyfill(7);
/* ⇒ 
["871fb4629ffffff", "871fb4674ffffff", "871fb475affffff", "871fb462dffffff"]
*/
```

* * *

<a name="compact"></a>

### .compact() ⇒ <code>Array</code>
Compact a set of H3Index (from polyfill).

* **Success Returns**: <code>Array</code> - H3Index | Return the H3Index hexagons for a polygon coordinates.

| Param | Type | Description |
| --- | --- | --- |
| <code>this</code> | <code>Array</code> | Array of H3Index hexagon |

**Examples**:
```javascript
["871fb4629ffffff", "871fb4674ffffff", "871fb475affffff", "871fb462dffffff"].compact();
/* ⇒ 
["871fb4629ffffff", "871fb4674ffffff", "871fb475affffff", "871fb462dffffff"]
*/
```

* * *

<a name="uncompact"></a>

### .uncompact(resolution) ⇒ <code>Array</code>
Uncompact a set of H3Index (from polyfill).

* **Success Returns**: <code>Array</code> - H3Index | Return the H3Index hexagons for a polygon coordinates.

| Param | Type | Description |
| --- | --- | --- |
| <code>this</code> | <code>Array</code> | Array of H3Index hexagon |
| <code>resolution</code> | <code>Number</code> | Resolution value between 0 and 15 |

**Examples**:
```javascript
["871fb4629ffffff", "871fb4674ffffff", "871fb475affffff", "871fb462dffffff"].uncompact(8);
/* ⇒ 
["881fb46291fffff", "881fb46293fffff", "881fb46295fffff", "881fb46297fffff", "881fb46299fffff", "881fb4629bfffff", "881fb4629dfffff", "881fb46741fffff", "881fb46743fffff", "881fb46745fffff", "881fb46747fffff", "881fb46749fffff", "881fb4674bfffff", "881fb4674dfffff", "881fb475a1fffff", "881fb475a3fffff", "881fb475a5fffff", "881fb475a7fffff", "881fb475a9fffff", "881fb475abfffff", "881fb475adfffff", "881fb462d1fffff", "881fb462d3fffff", "881fb462d5fffff", "881fb462d7fffff", "881fb462d9fffff", "881fb462dbfffff", "881fb462ddfffff"]
*/
```

* * *

<a name="outline"></a>

### .outline(resolution) ⇒ <code>Array</code>
Get a multiPolygon outline of a set of H3Index (from polyfill).

* **Success Returns**: <code>Array</code> - [[[Number, Number], [Number, Number], ...]] | Return the EPSG:4326 coordinates of outline from H3Index hexagons.

| Param | Type | Description |
| --- | --- | --- |
| <code>this</code> | <code>Array</code> | Array of H3Index hexagon |
| <code>resolution</code> | <code>Number</code> | Resolution value between 0 and 15 |

**Examples**:
```javascript
["871fb4629ffffff", "871fb4674ffffff", "871fb475affffff", "871fb462dffffff"].outline(7);
/* ⇒ 
[
  [
    [48.849476144178155, 2.254238615373305],
    [48.84391432966857, 2.2705493246115935],
    [48.8507236707005, 2.2845052936641945],
    [48.84515836634219, 2.300808678864533],
    [48.851962895082266, 2.314764176066189],
    [48.864333537520835, 2.3124209047064297],
    [48.86990097656434, 2.296115279687646],
    [48.88227107481755, 2.293767054691801],
    [48.88783715770979, 2.277451853447072],
    [48.88103100807799, 2.2634871222222466],
    [48.886593596185456, 2.2471645892250387],
    [48.87978262923516, 2.2331993954560487],
    [48.86740988824372, 2.235561347404659],
    [48.861849433831644, 2.2518816282067755]
  ]
]
*/
```



## External documentations


### h3-js

* [Documentation h3-js](https://github.com/uber/h3-js)


### Uber H3

* [Documentation Uber H3](https://uber.github.io/h3/#/)


