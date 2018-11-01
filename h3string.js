/*
// Uber H3 documentation : https://github.com/uber/h3-js
*/

/*
// String.prototype
*/

Object.defineProperty(String.prototype, "valid", {
	value() {
		var hash = this.toString();
		var valid = h3.h3IsValid(hash);
		if (!valid) valid = h3.h3UnidirectionalEdgeIsValid(hash);
		return valid;
	}
});

Object.defineProperty(String.prototype, "type", {
	value() {
		var hash = this.toString();
		var valid = h3.h3IsValid(hash);
		var type = "hexagon";
		if (!valid) {
			valid = h3.h3UnidirectionalEdgeIsValid(hash);
			type = "edge";
		}
		if (valid) return type;
		else return false;
	}
});

Object.defineProperty(String.prototype, "neighbour", {
	value(neighbour) {
		var hash = this.toString();
		return h3.h3IndexesAreNeighbors(hash, neighbour);
	}
});

Object.defineProperty(String.prototype, "pentagon", {
	value() {
		var hash = this.toString();
		return h3.h3IsPentagon(hash);
	}
});

Object.defineProperty(String.prototype, "resClass", {
	value() {
		var hash = this.toString();
		return h3.h3IsResClassIII(hash) ? 3 : 2;
	}
});

Object.defineProperty(String.prototype, "base", {
	value() {
		var hash = this.toString();
		return h3.h3GetBaseCell(hash);
	}
});

Object.defineProperty(String.prototype, "getRes", {
	value() {
		var hash = this.toString();
		return h3.h3GetResolution(hash);
	}
});

Object.defineProperty(String.prototype, "point", {
	value() {
		var hash = this.toString();
		return h3.h3ToGeo(hash);
	}
});

Object.defineProperty(String.prototype, "polygon", {
	value(geojson) {
		if (geojson === undefined || geojson === null) geojson = true;
		var hash = this.toString();
		return h3.h3ToGeoBoundary(hash, geojson);
	}
});

Object.defineProperty(String.prototype, "linestring", {
	value(geojson) {
		if (geojson === undefined || geojson === null) geojson = true;
		var hash = this.toString();
		return h3.getH3UnidirectionalEdgeBoundary(hash, geojson);
	}
});

Object.defineProperty(String.prototype, "buffer", {
	value(size, ordered) {
		if (size === undefined || size === null || size === 0) size = 1;
		var hash = this.toString();
		if (ordered === undefined || ordered === null || ordered === false) return h3.kRing(hash, size);
		else return h3.kRingDistances(hash, size);
	}
});

Object.defineProperty(String.prototype, "ring", {
	value(size) {
		if (size === undefined || size === null || size === 0) size = 1;
		var hash = this.toString();
		return h3.hexRing(hash, size);
	}
});

Object.defineProperty(String.prototype, "edges", {
	value() {
		var hash = this.toString();
		return h3.getH3UnidirectionalEdgesFromHexagon(hash);
	}
});

Object.defineProperty(String.prototype, "direction", {
	value(destination) {
		var hash = this.toString();
		if (destination) { // HEX->HEX=EDGE
			return [h3.getH3UnidirectionalEdge(hash, destination)];
		} else { // EDGE=HEX->HEX
			return h3.getH3IndexesFromUnidirectionalEdge(hash);
		}
	}
});

Object.defineProperty(String.prototype, "res", {
	value(r) {
		var hash = this.toString();
		var _r = h3.h3GetResolution(hash);
		if (_r < r) {
			return h3.h3ToChildren(hash, r);
		} else if (_r > r) {
			return [h3.h3ToParent(hash, r)];
		} else if (_r === r) {
			return hash;
		} else {
			return false;
		}
	}
});

Object.defineProperty(String.prototype, "distance", {
	value(destination) {
		if (!destination || (destination && h3.h3IsValid(destination) === false)) return false;
		var hash = this.toString();
		return h3.h3Distance(hash, destination);
	}
});

/*
// String.prototype (decode)
*/

Object.defineProperty(String.prototype, "decode", {
	value() {
		return h3ToBit();
	}
});

/*
// Array.prototype
*/

Object.defineProperty(Array.prototype, "hash", {
	value(resolution, latLon) {
		if (resolution >= 0) {
			if (!latLon) return h3.geoToH3(this[1], this[0], resolution);
			else return h3.geoToH3(this[0], this[1], resolution);
		} else return false;
	}
});

Object.defineProperty(Array.prototype, "polyfill", {
	value(resolution, latLon) {
		if (resolution >= 0) {
			if (!latLon) return h3.polyfill(this, resolution, true);
			else return h3.polyfill(this, resolution, false);
		} else return false;
	}
});

Object.defineProperty(Array.prototype, "compact", {
	value() {
		return h3.compact(this);
	}
});

Object.defineProperty(Array.prototype, "uncompact", {
	value(resolution) {
		if (resolution >= 0) return h3.uncompact(this, resolution);
		else return false;
	}
});

Object.defineProperty(Array.prototype, "outline", {
	value(latLon) {
		if (!latLon) return h3.h3SetToMultiPolygon(this, true);
		else return h3.h3SetToMultiPolygon(this, false);
	}
});
