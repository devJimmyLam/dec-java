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
	<p>This is a JSP page</p>
	
	<form action="/process" method="POST">
		Name: <input type="text" name="name" /><br>
		Password: <input type="text" name="password" /><br>
		<input type="submit" value="Login!" />
	</form>

</body>
</html>