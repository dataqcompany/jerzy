describe('jerzy.Normal', function() {
	var n = new jerzy.Normal(0, 1);
	var n2 = new jerzy.Normal(1.2, 1.8);
	describe("#dens", function() {
		it("should return the correct value", function() {
			assert.closeTo(n.dens(0), 0.3989423, 0.0000001);
			assert.closeTo(n.dens(1), 0.2419707, 0.0000001);
			assert.closeTo(n.dens(2), 0.05399097, 0.00000001);
			assert.closeTo(n.dens(3), 0.004431848, 0.00000001);
			assert.closeTo(n.dens(4), 0.0001338302, 0.00000001);
			assert.closeTo(n.dens(5), 0.00000148672, 0.00000001);
		});
	});
	describe("#distr", function() {
		it("should return the correct value", function() {
			assert.closeTo(n.distr(0), 0.5, 0.0000001);
			assert.closeTo(n.distr(1), 0.8413447, 0.0000001);
			assert.closeTo(n.distr(2), 0.9772499, 0.0000001);
			assert.closeTo(n.distr(3), 0.9986501, 0.0000001);
			assert.closeTo(n.distr(4), 0.9999683, 0.0000001);
			assert.closeTo(n.distr(5), 0.9999997, 0.0000001);
		});
	});
	describe("#inverse", function() {
		it("should return the correct value", function() {
			assert.closeTo(n.inverse(0.01), -2.326348, 0.000001);
			assert.closeTo(n.inverse(0.1), -1.281552, 0.000001);
			assert.closeTo(n2.inverse(0.01), -2.987426, 0.000001);
			assert.closeTo(n2.inverse(0.1), -1.106793, 0.000001);
		});
	});
});

describe('jerzy.T', function() {
	var t = new jerzy.T(100);
	describe("#dens", function() {
		it("should return the correct value", function() {
			assert.closeTo(t.dens(-5), 0.000005080, 0.000000001);
			assert.closeTo(t.dens(-4), 0.000221155, 0.000000001);
			assert.closeTo(t.dens(-3), 0.00512609, 0.00000001);
			assert.closeTo(t.dens(-2), 0.05490864, 0.00000001);
			assert.closeTo(t.dens(-1), 0.2407659, 0.0000001);
			assert.closeTo(t.dens(0), 0.3979462, 0.0000001);
		});
	});
	describe("#distr", function() {
		it("should return the correct value", function() {
			assert.closeTo(t.distr(-5), 0.000001225087, 0.000000001);
			assert.closeTo(t.distr(-3), 0.001703958, 0.000001);
			assert.closeTo(t.distr(-1), 0.1598621, 0.0001);
			//assert.closeTo(t.distr(0), 0.5000000, 0.0000001);
			assert.closeTo(t.distr(5), 0.9999988, 0.000001);
		});
	});
});