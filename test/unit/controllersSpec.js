describe('taskControllers controllers', function() {

  describe('TaskListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('taskApp'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('json/tasks.json').
      respond([{name: 'Today_task1', obj_status: 'active'}, {name: 'Deleted_task', obj_status: 'deleted'}]);

      scope = $rootScope.$new();
      ctrl = $controller('TaskListCtrl', {$scope: scope});
    }));

    it('should create "tasks" model with 2 tasks fetched from xhr', function() {
      expect(scope.tasks).toBeUndefined();
      $httpBackend.flush();

      expect(scope.tasks).toEqual([{name: 'Today_task1', obj_status: 'active'},
        {name: 'Deleted_task', obj_status: 'deleted'}]);
    });

    it('Total quantity is 2', function() {
          expect(scope.tasks).toBeUndefined();
          $httpBackend.flush();

          expect(scope.tasks.length).toBe(2);
        });

    it('test for tasks[n].obj_status', function() {
              expect(scope.tasks).toBeUndefined();
              $httpBackend.flush();

              expect(scope.tasks[0].obj_status=='active').toBe(true);
              expect(scope.tasks[1].obj_status=='active').toBe(false);
            });
  });
});



