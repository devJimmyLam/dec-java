<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>Hello World!</h1>
	
	<a href="/createDojo">create a new dojo!</a>
	
	<hr>
	
	<c:forEach items="${dojos}" var="dojo">
		<p><c:out value="${dojo.name}"></c:out></p>
	</c:forEach>

</body>
</html>