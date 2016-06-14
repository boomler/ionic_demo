angular.module('starter.controllers', [])
  .controller('DashCtrl', function ($scope, recommendBooks, $http, $rootScope) {
    $rootScope.url = "http://121.42.168.234:5271";
    //  $http.get($rootScope.url+"/userInfo/"+$rootScope.user.user_id)
    //  .success(function(data,status){
    //     $rootScope.user=data;
    //
    //    //请求到个人信息后，根据个人信息继续请求推荐信息
    //    $http.get($rootScope.url + "/books?user_id=" + $scope.userId + "&group_id" + $scope.groupNum).success(function (back) {
    //        $scope.rItems = back;
    //        console.log(back);
    //      })
    //      .error(function (data, status, headers, config) {
    //      });
    //
    // });
    $rootScope.user={name: "隔壁老王", headPic: "img/adam.jpg", bkg: "img/bkg.png",user_id:'',grade:'1'};
    $scope.type='1';
    $scope.groupNum = 0;
    $scope.grade = $rootScope.user.grade;


    //热门书籍-校内
    $scope.changeType = function (x) {
      console.log(x);
    };


    $scope.setGradeLevel = function (val) {
      console.log(val);
    };


    $scope.rItems = [{name: "name", writer: "writer", intro: "inttro", span: "span"}];
  })
  .controller('detailsContrl', function ($scope, $stateParams, $http, $rootScope) {
    // $http.get($rootScope.url+"/details?id="+$stateParams.id)
    //书ID获取输的详细信息
    $http.get($rootScope.url + "/bookDetails/" + $stateParams.id)
      .success(function (data, status, headers, config) {
        
        
        
      })
      .error(function (data, status, headers, config) {
        console.log("status:" + status);
      });

    
    
  })
  .controller('TestReadingCtrl', function ($scope, $http, $stateParams, $rootScope) {
    $http.get($rootScope.url + "/testReading?id=" + $stateParams.id)
      .success(function (data, status, headers, config) {
        if (data.length == 0) {
          $scope.testcontent.chapter_name = "未找到资源";
          $scope.testcontent.chapter_count = "err:";
          $scope.testcontent.id = "";
          $scope.testcontent.content = "服务器并没有资源，换一个？"
        }
        else {
          $scope.testcontent = data[0];
          console.log(data);
        }
      }).error(function (data, status, headers, config) {
      console.log("error:" + status);
    });
    $scope.testcontent = {chapter_count: "", id: "", content: "", chapter_name: ""};
  })
  .controller('ChatsCtrl', function ($scope, $ionicPopover, $rootScope, $http, $stateParams) {
    //获取好友列表
    //根据当前用户ID请求该用户的好友列表，返回信息包括头像、ID、昵称、
    var user_id = 0;
    $http.get($rootScope.url + "/friendsList/" + user_id)
      .success(function (data) {
        //好友信息
        $scope.frinds = data;

      }).error(function (data, status) {

    });


    $ionicPopover.fromTemplateUrl('templates/friendsManagePopu.html', {scope: $scope}).then(function (popover) {
      $scope.popover = popover;
    });
    $scope.openPopover = function ($event) {
      console.log($event);
      $scope.popover.show($event);
    };
    $scope.closePopover = function () {
      $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function () {
      $scope.popover.remove();
    });
    // Execute action on hide popover
    $scope.$on('popover.hidden', function () {
      // Execute action
    });
    // Execute action on remove popover
    $scope.$on('popover.removed', function () {
      // Execute action
    });
    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true;
    $scope.delete = function (item) {
      console.log('delete');
    }
  })

  .controller('ChattingCtrl', function ($scope, $state) {
    $scope.showFriendsInfo = function () {
      $state.go("friendInfor");
    }
  })

  .controller('AccountCtrl', function ($scope, $rootScope) {
    $rootScope.user = {avatar: 'ddd', id: 'id', school: 'school', grade: 'grade', gender: 'gender', age: 'age'};
    $scope.user = $rootScope.user;
  })
  .controller('tabCon', function ($scope, $ionicTabsDelegate, $interval) {


  })
  .controller('personalBookStore', function ($scope, $http, $state, $rootScope, $stateParams) {
    $scope.img = 'img/bainian.png';
    $http.get($rootScope.url + "/collectedBooks/" + $stateParams.id)
      // $http.get($rootScope.url+"/books")
      .success(function (data, status, headers, config) {
        $scope.book = data;
        console.log(data);
      })
      .error(function (data, status, headers, config) {
        console.log("data:" + data);
        console.log("status:" + status);
        console.log("headers:" + headers);
        console.log("config:" + config);
      });
    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true;
    $scope.edit = function (item) {
      console.log('edit');
      //删除选中项目
    };
    $scope.delete_item = function (item) {
      var idx = $scope.books.indexOf(item);
      console.log(item);
      console.log(idx);
      $scope.books.splice(idx, 1);
    };
    $scope.backTopersonal = function () {
      $state.go("tab.account");
    }
  })

  .controller('ReadingCtrl', function ($scope, $interval, $stateParams, $ionicScrollDelegate, ersonalBookStore$http, $rootScope) {
    //用于判定是否自动滑动
    $scope.isAutoScroll = false;
    $scope.isGravityScrollCtrl = false;
    //用于存储当前的与水平方向的角度，用于自动翻页的速度计算
    $scope.currentValue = 0;
    $scope.testcontent = {chapter_count: "Blank", id: "", content: "服务器并没有资源，换一个？", chapter_name: "未找到资源"};
    //滚动条当前位置
    var cPosition;

    $http.get($rootScope.url + "/Reading?id=" + $stateParams.id)
      .success(function (data, status, headers, config) {
        if (data.length == 0) {
        }
        else {
          $scope.testcontent = data[0];
          $scope.maxScrollTop = $ionicScrollDelegate.getScrollView().__maxScrollTop;
          console.log(data);
        }
      }).error(function (data, status, headers, config) {
      console.log("error:" + status);
    });


    var lastPosition = -1;
    var timer;

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', function (event) {
        var beta = event.beta;
        if ($scope.isGravityScrollCtrl) {
          if (beta <= 10) {
            $scope.currentValue = 0;
          }
          else if (beta > 10 && beta <= 20) {
            $scope.currentValue = 1;
          }
          else if (beta > 20 && beta <= 35) {
            $scope.currentValue = 2;
          }
          else if (beta > 35 && beta <= 45) {
            $scope.currentValue = 3;
          }
          else if (beta > 45 && beta <= 65) {
            $scope.currentValue = 4;
          }
          else if (beta > 65 && beta <= 75) {
            $scope.currentValue = 5;
          }
          else {
            $scope.currentValue = 6;
          }
        }
      }, false);
    } else {
      console.log('This device does not support deviceorientation');
    }
    //定时器，周期滑动滚动条，实现自动阅读
    function error() {
      console.log("error");
    }

    function success() {
      console.log("success");
    }

    function notify() {
      if ($scope.isAutoScroll) {
        //每次都执行的代码
        cPosition = $ionicScrollDelegate.getScrollPosition();
        // console.log("current:"+cPosition.top);
        // console.log("last:"+lastPosition);
        if (cPosition.top == lastPosition) {
          // if (cPosition.top+1>=$scope.maxScrollTop) {
          $scope.isAutoScroll = false;
          // console.log(cPosition.top);
          // console.log($scope.maxScrollTop);
          alert('到底了');
          $interval.cancel(timer);
        }
        else {
          $ionicScrollDelegate.scrollTo(cPosition.left, cPosition.top + 1);
          lastPosition = cPosition.top - 1;
        }
      }
    }

    function notify_g() {
      if ($scope.isGravityScrollCtrl) {
        //当前位置
        cPosition = $ionicScrollDelegate.getScrollPosition();
        //到达底部了，就停止滑动
        if (cPosition.top == lastPosition) {
          $scope.isGravityScrollCtrl = false;
          console.log(cPosition);
          console.log($scope.maxScrollTop);
          alert('到底了');
          $interval.cancel(timer);
        }
        else {
          $ionicScrollDelegate.scrollTo(cPosition.left, cPosition.top + 1);
        }
      }
    }

    //自动滑动参数控制
    $scope.AutoScroll = function (a) {
      if ($scope.isAutoScroll) {
        $scope.isAutoScroll = false;
        $interval.cancel(timer);
        lastPosition = -1;
      }
      else {
        if ($scope.isGravityScrollCtrl) {
          $scope.startGravityScrollCtrl();
        }
        $scope.isAutoScroll = true;
        timer = $interval(function () {
        }, 20);
        timer.then(success, error, notify);
      }
      // console.log($scope.isAutoScroll);

    };
    $scope.startGravityScrollCtrl = function () {
      if ($scope.isGravityScrollCtrl) {
        $scope.isGravityScrollCtrl = false;
        $interval.cancel(timer);
        lastPosition = -1;
      }
      else {
        if ($scope.isAutoScroll) {
          $scope.AutoScroll();
        }
        $scope.isGravityScrollCtrl = true;
        timer = $interval(function () {
        }, 1000);
        timer.then();
      }
    };
    //监听模型$currentValue,变化时触发滑动速度改变额事件
    $scope.$watch('currentValue', function (newValue, oldValue) {
      $scope.newValues = newValue;
      $scope.oldValues = oldValue;
      $interval.cancel(timer);
      switch (newValue) {
        case 0:
        {
          timer = $interval(function () {
          }, 1000);
          timer.then();
          break;
        }
        case 1:
        {
          timer = $interval(function () {
          }, 200);
          timer.then(success, error, notify_g);
          break;
        }
        case 2:
        {
          timer = $interval(function () {
          }, 100);
          timer.then(success, error, notify_g);
          break;
        }
        case 3:
        {
          timer = $interval(function () {
          }, 60);
          timer.then(success, error, notify_g);
          break;
        }
        case 4:
        {
          timer = $interval(function () {
          }, 50);
          timer.then(success, error, notify_g);
          break;
        }
        case 5:
        {
          timer = $interval(function () {
          }, 20);
          timer.then(success, error, notify_g);
          break;
        }
        case 6:
        {
          timer = $interval(function () {
          }, 10);
          timer.then(success, error, notify_g);
          break;
        }
        default:
        {
          break;
        }
      }
    })
  })
  .controller('friendInforCtrl', function ($scope, $http, $stateParams, $rootScope) {
    //根据好友ID获取好友信息
    $http.get($rootScope.url + "/userDetail/" + user_id)
      .success(function (data, status) {
            console.log(status);
      })
      .error(function (err, status) {

      });

    $scope.deleteFriend=function () {
      //删除好友，用户ID+好友ID
      $http.post($rootScope.url+"/deleteFriend",{user_id:user_id,friend_id:friend_id})
        .success(function (data) {
          if(data===1){
            console.log("已经成功删除");
          }else {
            console.log("删除失败，不存在该好友");
          }
        })
    };

    $scope.books = [
      {name: 'Jani', writer: 'Norway', img: 'img/bainian.png'},
      {name: 'Jani', writer: 'Norway', img: 'img/bainian.png'},
      {name: 'Jani', writer: 'Norway', img: 'img/bainian.png'}
    ]
  })
  .controller('personalInfoCtrl', function ($scope, $http, $stateParams, $rootScope) {
    $scope.user = {avatar: '', id: 'id', school: 'school', grade: 'grade', gender: 'gender', age: 'age'}

  })
  .controller('picUploadCtrl', function ($scope, $http, $stateParams, $rootScope, $state) {
    $scope.user = {head: "", id: '2', school: '2', grade: '2', gender: 'x', age: '1'};
    $scope.fileChanged = function (e) {
      var files = e.target.files;
      if (files.length === 1) {
        var fileReader = new FileReader();
        fileReader.readAsDataURL(files[0]);
        fileReader.onload = function (e) {
          $scope.imgSrc = this.result;
          $scope.$apply();
        };
      }

    };
    $scope.clear = function () {
      $scope.imageCropStep = 1;
      delete $scope.imgSrc;
      delete $scope.result;
      delete $scope.resultBlob;
    };
    $scope.upload = function () {
      //   $http.post($rootScope.url+"/avatarUpload",{user_id:'',img:$scope.imgSrc})
      // // $http.get("http://127.0.0.1:8888"+"/avatarUpload/1/s")
      //     .success(function (data) {
      //       console.log(data);
      //     })

      $rootScope.user.avatar = $scope.result;
      $state.go('personalInfo');
    }
  })
  .controller('loginCtrl',function ($scope, $http, $stateParams, $rootScope, $state,Storage) {
    $scope.user_id="shish";
    $scope.user_psd="sjia";
    $scope.login=function () {
      $http.post($rootScope.url+"/login",{name:$scope.user_id,password:$scope.user_psd})
        .success(function (data,status) {
            if(data=="success"){
              $state.go("tab.dash");//登录的默认地址
            }
        })
        .error(function (err,status) {
          $log(err);
        });

    }
})
  /*
  .controller('anyCtrl',function ($rootScope) {
    $rootScope.$on('userIntercepted',function(errorType){
      // 跳转到登录界面，这里我记录了一个from，这样可以在登录后自动跳转到未登录之前的那个界面
      $state.go("login",{from:$state.current.name,w:errorType});
    });
  })*/
;

