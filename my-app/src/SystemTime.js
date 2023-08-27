function SystemTime(props)
{
  const user = {
    firstName: 'Randall',
    lastName: 'Mays',
    userEmail: 'example.com',
    timeStamp: CurrentTime()
  };

  const element = (
    <i>
      <div>
        CurrentTime();
      </div>
      Welcome,  {user.firstName}! {pageLoaded()}
    </i>
  );

  return element;
};  

function CurrentTime() {
  return new Date().toLocaleTimeString();
}

function pageLoaded() {
  console.info('Page loaded at ' + CurrentTime()) ;
};

export default SystemTime;