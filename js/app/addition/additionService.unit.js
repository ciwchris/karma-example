(function() {
    'use strict';

    // http://www.benlesh.com/2013/06/angular-js-unit-testing-services.html
    describe('Testing addition in a service', function () {
        var additionService, httpBackend;

        beforeEach(module('karma.example'));

        beforeEach(inject(function($httpBackend, _additionService_) {
                additionService = _additionService_;
                httpBackend = $httpBackend;
        }));

        afterEach(function() {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });

        it('should add two numbers', function() {
            var returnData = { sum: 0 } ;
           
            httpBackend.expectPOST('api/addition').respond(returnData);
          
            var returnedPromise = additionService.add(0, 0);

            var result;
            returnedPromise.then(function(response) {
                result = response;
            });
            
            httpBackend.flush();

            expect(result.data).toEqual(returnData); 
        });
    }); 
})();
