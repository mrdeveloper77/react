function MyTestElement(props)
{

  const user = {
    firstName: 'React',
    timeStamp: CurrentTime()
  };
  
  function formatName(user) {
    return user.firstName + ' page loaded at ' + user.timeStamp;
  };
  
  const element = (
    <i>
      Welcome,  {user.firstName} user! {formatName(user)}
    </i>
  );

  return element;
};  

function CurrentTime() {
  return new Date().toLocaleTimeString();
}

export default MyTestElement;