var minionModule = angular.module('app',['ngMask']);


minionModule.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
}]);

minionModule.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});

minionModule.controller('GuageController',function($scope,$rootScope)
{
	
		$scope.CreateGauge1 = function(){
            $('#gauge1').jqxGauge({ radius:'100px',
                ranges: [{ startValue: 0, endValue: 60, style: { fill: '#4cb848', stroke: '#4cb848' }, startDistance: 0, endDistance: 0 },
                         { startValue: 60, endValue: 90, style: { fill: '#fad00b', stroke: '#fad00b' }, startDistance: 0, endDistance: 0 },
                         { startValue: 90, endValue: 100, style: { fill: '#e53d37', stroke: '#e53d37' }, startDistance: 0, endDistance: 0}],
                cap: { size: '5%', style: { fill: '#2e79bb', stroke: '#2e79bb'} },
                border: { style: { fill: '#8e9495', stroke: '#7b8384', 'stroke-width': 1 } },
                ticksMinor: { interval: 5, size: '5%' },
                ticksMajor: { interval: 10, size: '10%' },       
                labels: { position: 'outside', interval: 10 },
                pointer: { style: { fill: '#2e79bb' }, width: 5 },
                animationDuration: 1500,
				max:100,
				height:200
            });
			$('#gauge1').jqxGauge({ caption: { value: 'Text(x100)', position: 'bottom', offset: [0, 10], visible: true }});
            $('#slider1').jqxSlider({ min: 0, max: 10000, mode: 'fixed', ticksFrequency: 200, width: 200, value: 120,  showButtons: false });

            $('#slider1').mouseup(function () {
                $('#gauge1').jqxGauge('value', $('#slider1').jqxSlider('value')/100);
				$scope.textValue = $('#slider1').jqxSlider('value');
				$scope.calc();
				$scope.$digest();

            });
            $('#slider1').on('slideEnd', function (e) {
                $('#gauge1').jqxGauge('value', e.args.value/100);
            });
            $('#slider1').on('mousewheel', function () {
                $('#gauge1').jqxGauge('value', $('#slider1').jqxSlider('value'));
            });
            $('#textValueId').blur(function () {
            	console.log($('#textValueId').value);
                $('#gauge1').jqxGauge('value', $('#textValueId').val()/100);
                $('#slider1').jqxSlider('value',$('#textValueId').val());
            });            
            //$('#gauge1').jqxGauge('value', 60);
		}
		$scope.CreateGauge2 = function(){
            $('#gauge2').jqxGauge({ radius:'100px',
                ranges: [{ startValue: 0, endValue: 6, style: { fill: '#4cb848', stroke: '#4cb848' }, startDistance: 0, endDistance: 0 },
                         { startValue: 6, endValue: 9, style: { fill: '#fad00b', stroke: '#fad00b' }, startDistance: 0, endDistance: 0 },
                         { startValue: 9, endValue: 10, style: { fill: '#e53d37', stroke: '#e53d37' }, startDistance: 0, endDistance: 0}],
                cap: { size: '5%', style: { fill: '#2e79bb', stroke: '#2e79bb'} },
                border: { style: { fill: '#8e9495', stroke: '#7b8384', 'stroke-width': 1 } },
                ticksMinor: { interval: .5, size: '5%' },
                ticksMajor: { interval: 1, size: '10%' },       
                labels: { position: 'outside', interval: 1 },
                pointer: { style: { fill: '#2e79bb' }, width: 5 },
                animationDuration: 1500,
				max:10,
				height:200
            });
			$('#gauge2').jqxGauge({ caption: { value: 'Data(GB)', position: 'bottom', offset: [0, 10], visible: true }});
            $('#slider2').jqxSlider({ min: 0, max: 10, mode: 'fixed', ticksFrequency: .5, width: 200, value: 0,  showButtons: false });

            $('#slider2').mouseup(function () {
                $('#gauge2').jqxGauge('value', $('#slider2').jqxSlider('value'));
				$scope.dataValue=$('#slider2').jqxSlider('value');
				$scope.calc();
				$scope.$digest();

            });
            $('#slider2').on('slideEnd', function (e) {
                $('#gauge2').jqxGauge('value', e.args.value);
            });
            $('#slider2').on('mousewheel', function () {
                $('#gauge2').jqxGauge('value', $('#slider2').jqxSlider('value'));
            });
            $('#dataValueId').blur(function () {
            	console.log($('#dataValueId').value);
                $('#gauge2').jqxGauge('value', $('#dataValueId').val());
                $('#slider2').jqxSlider('value',$('#dataValueId').val())
            });              
            //$('#gauge2').jqxGauge('value', 60);
		}
		
		$scope.CreateGauge = function(){
            $('#gauge').jqxGauge({ radius:'100px',height:200,
                ranges: [{ startValue: 0, endValue: 60, style: { fill: '#4cb848', stroke: '#4cb848' }, startDistance: 0, endDistance: 0 },
                         { startValue: 60, endValue: 90, style: { fill: '#fad00b', stroke: '#fad00b' }, startDistance: 0, endDistance: 0 },
                         { startValue: 90, endValue: 100, style: { fill: '#e53d37', stroke: '#e53d37' }, startDistance: 0, endDistance: 0}],
                cap: { size: '5%', style: { fill: '#2e79bb', stroke: '#2e79bb'} },
                border: { style: { fill: '#8e9495', stroke: '#7b8384', 'stroke-width': 1 } },
                ticksMinor: { interval: 5, size: '5%' },
                ticksMajor: { interval: 10, size: '10%' },       
                labels: { position: 'outside', interval: 10 },
                pointer: { style: { fill: '#2e79bb' }, width: 5 },
                animationDuration: 1500,
				max:100
            });
			$('#gauge').jqxGauge({ caption: { value: 'Minutes(x100)', position: 'bottom', offset: [0, 10], visible: true }});
            $('#slider').jqxSlider({ min: 0, max: 10000, mode: 'fixed', ticksFrequency: 200, width: 200, value: 120,  showButtons: false });

            $('#slider').mouseup(function () {
                $('#gauge').jqxGauge('value', $('#slider').jqxSlider('value')/100);
				console.log($('#slider').jqxSlider('value'));
				$scope.minuteValue=$('#slider').jqxSlider('value');
				$scope.calc();
				$scope.$digest();

				
            });
            $('#slider').on('slideEnd', function (e) {
                $('#gauge').jqxGauge('value', e.args.value/100);
            });
            $('#slider').on('mousewheel', function () {
                $('#gauge').jqxGauge('value', $('#slider').jqxSlider('value'));
            });
            $('#minuteValueId').blur(function () {
            	console.log($('#minuteValueId').value);
                $('#gauge').jqxGauge('value', $('#minuteValueId').val()/100);
                $('#slider').jqxSlider('value',$('#minuteValueId').val());
            });    
            //$('#gauge').jqxGauge('value', 60);
		}


	$scope.init = function(){

		$scope.minuteValue = 0.00;
		$scope.textValue = 0.00;
		$scope.dataValue = 0.00;
	
		$scope.formIndex = 0;
		
		$scope.curdate = new Date();
		
		$scope.existingCustomerFlag = 1;
	
		$scope.CreateGauge();
		$scope.CreateGauge1();
		$scope.CreateGauge2();
        
               
        $scope.autoenroll=false;
        $scope.ccsavehide = false;
        $scope.savecc = false;
        
        $scope.byop = false;
        $scope.byop = false;
        
        $scope.esnshow = false;
        $scope.simshow = false;
        $scope.zipshow = false;
        $scope.phonenumbershow = false;
        
        $scope.newc = {
            phno: '',
            carrier:'',
            byop:''
        };
	}
    
    $scope.computeFormFields = function(){
        if($scope.newc.phno!="" && $scope.newc.byop!="" && $scope.newc.carrier != ""){
            $scope.zipshow  = true;
            if($scope.newc.phno == "existing"){
                $scope.phonenumbershow = true;
            }else{
                $scope.phonenumbershow = false;
            }
            if($scope.newc.byop == "false" || ($scope.newc.byop == "true" && ($scope.newc.carrier== "spr" || $scope.newc.carrier == "ver"))){
                $scope.esnshow = true;
                $scope.simshow = false;
            }else{
                $scope.esnshow = false;
                $scope.simshow = true;
            }
           
        }
    }

	
    
    $scope.updateCCSaveBtn = function(){
        $scope.ccsavehide = $scope.autoenroll;
        $scope.savecc=$scope.autoenroll;
    }
	
	$scope.$on('minute',function(event,args){
		$scope.minuteValue = args;
		console.log($scope.minuteValue);
	});
	
	$scope.display=function(){
		console.log($scope.minuteValue);
	}
	
	$scope.calc = function(){
		$scope._charges = $scope.minuteValue*0.15+$scope.textValue*0.01+$scope.dataValue*5;
		$scope.charges = sprintf("%10.2f", $scope.minuteValue*0.15+$scope.textValue*0.01+$scope.dataValue*5);
		$scope.tax = sprintf("%10.2f", 3.45);
		$scope._tax = 3.45;
		$scope.total = sprintf("%10.2f", $scope._charges+$scope._tax);
	};
	
	$scope.next = function(){
		if($scope.formIndex < 4){
			$scope.formIndex = $scope.formIndex + 1;
		}
	}
	
	$scope.isNextDisabled = function(){
		return $scope.formIndex == 4;
	}
	
	$scope.prev = function(){
		if($scope.formIndex > 0){
			$scope.formIndex = $scope.formIndex - 1;
		}
	}
	
	$scope.isPrevDisabled = function(){
		return $scope.formIndex == 0;
	}
	
	$scope.isSelectPlanForm = function(){
		return $scope.formIndex == 0;
	}
	
	$scope.isPhoneForm = function(){
		return $scope.formIndex == 1;
	}
	
	$scope.isCreditCardForm = function(){
		return $scope.formIndex == 2;
	}

	$scope.isPaymentForm = function(){
		return $scope.formIndex == 3
	}
	
	$scope.isSummaryForm = function(){
		return $scope.formIndex == 4;
	}
	
	$scope.isExistingCustomer = function(){
		return $scope.existingCustomerFlag == 1;
	}
	
	$scope.isNewCustomer = function(){
		return $scope.existingCustomerFlag == 0;
	}
	
	$scope.newCustomer = function(){
		$scope.existingCustomerFlag = 0;
	}
	
	$scope.existingCustomer = function(){
		$scope.existingCustomerFlag = 1;
	}
	
	$scope.checkout = function(){
		$scope.next();
	}
});