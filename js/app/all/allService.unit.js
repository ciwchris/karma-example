(function() {
    'use strict';

    describe('Testing all arithmetic operations in a service', function () {
        var allService, httpBackend;

        beforeEach(module('karma.example'));

        beforeEach(inject(function($httpBackend, _allService_) {
                allService = _allService_;
                httpBackend = $httpBackend;
        }));

        afterEach(function() {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });

        it('should add two numbers', function() {
            var returnData = { sum: 0 } ;
           
            httpBackend.expectPOST('api/add').respond(returnData);
          
            var returnedPromise = allService.add(0, 0);

            var result;
            returnedPromise.then(function(response) {
                result = response;
            });
            
            httpBackend.flush();

            expect(result.data).toEqual(returnData); 
        });

        it('should subtract two numbers', function() {
            var returnData = { difference: 0 } ;
           
            httpBackend.expectPOST('api/subtract').respond(returnData);
          
            var returnedPromise = allService.subtract(0, 0);

            var result;
            returnedPromise.then(function(response) {
                result = response;
            });
            
            httpBackend.flush();

            expect(result.data).toEqual(returnData); 
        });

        it('should multiply two numbers', function() {
            var returnData = { product: 0 } ;
           
            httpBackend.expectPOST('api/multiply').respond(returnData);
          
            var returnedPromise = allService.multiply(0, 0);

            var result;
            returnedPromise.then(function(response) {
                result = response;
            });
            
            httpBackend.flush();

            expect(result.data).toEqual(returnData); 
        });

        it('should divide two numbers', function() {
            var returnData = { qoutient: 0 } ;
           
            httpBackend.expectPOST('api/divide').respond(returnData);
          
            var returnedPromise = allService.divide(0, 0);

            var result;
            returnedPromise.then(function(response) {
                result = response;
            });
            
            httpBackend.flush();

            expect(result.data).toEqual(returnData); 
        });
    }); 
})();
