# jQuery 주요 함수(method) 정리
---

##### 제이쿼리 시작
###### 처음 시작할 때 모습
<br/>
```javascript
$(document).ready(function(){ 
    //이곳에서 제이쿼리 다룸
});
```
<br/>
##### .add()
###### 선택한 요소와 추가 선택할 요소들이 선택된다.
<br/>
```javascript
//$('선택 요소').add('추가 선택 요소')
$('div').add('p').css('color', 'red');
```
<br/>
##### .addClass()
###### 선택한 요소에 클래스 추가한다.
<br/>
```javascript
//$('선택 요소').addClass('추가할 클래스')
$('div').addClass('sample');
```
<br/>
##### .append()
###### 선택 요소에 추가할 내용을 적으면 된다.
<br/>
```javascript
//$('선택 요소').addClass('추가할 내용')
$('div').append('<h1>새로 추가</h1>');
```
<br/>
##### .has()
###### 선택 요소가 갖고 있는 선택 요소를 만족하는 선택 요소를 선택한다.
<br/>
```javascript
//$('선택 요소').has('선택 요소가 갖고 있는 선택 요소')
$('div').has('span').css('color', 'red');
```
<br/>
##### .html()
###### 선택 요소 내 내용을 초기화 하면서, 선택 요소 내 내용이 새롭게 만들어진다. 추가할 내용을 적지 않으면 선택 요소 내용을 변수값으로 가져오는데, 여러 개의 선택 요소가 선택되면 가장 위에 것을 가져온다.
<br/>
```javascript
//$('선택 요소').addClass('초기화 하면서 안에 들어갈 내용')
$('div').html('<h1>a</h1>');
$('div').html();
```
<br/>
##### .last()
###### 가장 마지막 선택 요소를 선택한다.
<br/>
```javascript
//$('선택 요소').last()
$('div').last().html('<h1>a</h1>');
```
<br/>
##### .removeAttr()
###### 선택한 요소에 속성을 삭제한다.
<br/>
```javascript
//$('선택 요소').removeAttr('삭제할 속성')
$('input').removeAttr('placeholder');
```
<br/>

##### .removeClass()
###### 선택한 요소에 클래스 삭제한다.
<br/>
```javascript
//$('선택 요소').removeClass('삭제할 클래스')
$('div').removeClass('sample');
```
<br/>

##### .toggleClass()
###### 없는 클래스는 추가, 있는 클래스는 삭제한다.
<br/>
```javascript
//$('선택 요소').toggleClass('없는 클래스는 추가, 있는 클래스는 삭제')
$('div').toggleClass('sample');
```
<br/>

##### .val()
###### 양식(form)의 값을 가져오거나 설정하는 메소드이다. 양식 안에 추가할 내용이 있으면 추가, 아무것도 없으면 양식 내용을 가져온다.
<br/>
```javascript
//$('선택 요소').addClass('초기화 하면서 안에 들어갈 내용')
$('input').val('sample');
$('input').val();
```
<br/>

##### .attr()
###### 선택한 요소의 속성 값을 가져온다. 이전 속성 값을 모두 없애고 새로운 속성 값을 넣을 수 있다. HTML 속성 값이 모두 String으로 넘어온다.
<br/>
```javascript
//$('선택 요소').attr('속성', '속성 값')
//$('선택 요소').attr('속성')
$('div').attr('class', 'a')
$('div').attr('class')
```
<br/>

##### .prop()
###### 선택한 요소의 속성 값을 가져온다. 이전 속성 값을 모두 없애고 새로운 속성 값을 넣을 수 있다. 자바스크립트의 프로퍼티 값이 넘어오기 때문에 boolean, date, function 등도 가져올 수 있다. .attr()보다 약 2.5배 빠르다.
<br/>
```javascript
//$('선택 요소').prop('초기화 하면서 안에 들어갈 내용')
$('div').html('<h1>a</h1>');
```
<br/>
