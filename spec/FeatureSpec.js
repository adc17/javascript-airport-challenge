(function() {
  'use strict';
  describe('Plane', function() {
    var plane;
    var airport;

    beforeEach(function() {
      plane = new Plane();
      airport = new Airport();
    });

    describe('#land', function() {
      it("planes can be instructed to land at an airport", function() {
	plane.land(airport);
	expect(airport.planes()).toContain(plane);
      });

    });

    describe('#takeoff', function() {
      it("planes can be instructed to takeoff from an airport", function() {
        plane.land(airport);
        plane.takeoff;
        expect(airport.planes()).not.toContain(plane);
      });
    }); 
  });

}());