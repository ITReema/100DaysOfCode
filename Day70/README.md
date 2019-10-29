# Day 70
In Day 70 we learn about  JavaScript in Web Documents. 

### Add JavaScript to a Page
Web browsers are built to understand ```HTML``` and ```CSS``` and convert those languages into a visual display on the screen. The part of the web browser that understands ```HTML``` and ``` CSS```is called the layout or rendering engine. But most browsers also have something called a JavaScript interpreter. That’s the part of the browser that understands JavaScript and can execute the steps of a JavaScript program. The web browser is usually expecting ```HTML```, so you must specifically tell the browser when JavaScript is coming by using the ```<script>``` tag.

The ```<script>``` tag is regular ```HTML```. It acts like a switch that in effect says “Hey, web browser, here comes some JavaScript code; you don’t know what to do with it, so hand it off to the JavaScript interpreter.” When the web browser encounters the closing ```</script>``` tag, it knows it’s reached the end of the JavaScript program and can get back to its normal duties.

Much of the time, you’ll add the ```<script>``` tag in the web page’s ```<head>``` section, like this:
```
<!DOCTYPE html>
<html>
<head>
    <script>
        alert('hello world!');
    </script>
</head>
```

### External JavaScript Files
An external JavaScript file is a text file containing JavaScript code and ending with the file extension .js. For example, to add this JavaScript file to your home page, you might write the following:
```
<!DOCTYPE html>
<html>
<head>
    <script src="script.js"></script>
</head>
```
You can attach multiple external JavaScript files to a single web page. 

to attach external JavaScript files and add a JavaScript program to the same page like this:
```
<!DOCTYPE html>
<html>
<head>
    <script src="script1.js"></script>
    <script src="script2.js"></script>
    <script>
        alert('hello world!');
    </script>
</head>
```
