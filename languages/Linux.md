### Get the information from file based on delimiter and fields

cut -d':' -f1 <File name>  - -d is delimiter and -f is fields  i.e. -f1-5 (get fields 1 to 5)

### Sort the file based on character position (start and end)

   sort -k 1.104,1.105 <File Name> - sorting the file based on character 104 and 105

### how to take a thread dump of tomcat running in linux

  If you use Linux, you can send a kill -3 [pid of your tomcat] and it will dump all current threads in the catalina.out.
  or Login as tomcat and run jstack < PID > >> /tmp/threaddump. jstack utility is part of jdk  
