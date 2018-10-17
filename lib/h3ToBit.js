function h3ToBit (h) {

	if (h) var hash = h;
	else var hash = this.toString();

	if (!hash || hash.length !== 15) return false;
	if (hash) {
		var octets = new Int64BE(hash, 16).buffer;
		var bits = [];
		var decoded = {
			hash: [hash],
			mode: "",
			edge: "",
			resolution: "",
			cell: "",
			digits: {},
		};
		for (var o in octets) bits = bits.concat(bitReader(octets[o]));
		bits.shift();
		decoded.hash.push(bits.join(""));
		decoded.mode = [parseInt(bits.slice(0, 4).join(""), 2), bits.slice(0, 4).join("")];
		decoded.edge = [parseInt(bits.slice(4, 7).join(""), 2), bits.slice(4, 7).join("")];
		decoded.resolution = [parseInt(bits.slice(7, 11).join(""), 2), bits.slice(7, 11).join("")];
		decoded.cell = [parseInt(bits.slice(11, 18).join(""), 2), bits.slice(11, 18).join("")];
		var residual = bits.slice(18);
		var previousCursor = 0;
		var bits3x15 = "";
		for (var i=0; i<(3*15); i++) { bits3x15 += residual[i]; }
		for (var i=0; i<bits3x15.length; i++) {
			var bits3 = parseInt(bits3x15.slice(previousCursor, previousCursor+3));
			if (bits3) decoded.digits["digit"+(i+1)] = [parseInt(bits3, 2), String(bits3)];
			previousCursor += 3;
		}
		return decoded;
	}

};