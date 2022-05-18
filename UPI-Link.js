function getUPILink(vpa, name,r,t,com)
{
  var upiLink;
  upiLink= "upi://pay?pa=" + vpa + "&pn=" + name+"&am=" +r+"&cu="+t+"&tn="+com;

  return upiLink;
}
function getUPILink1(vpa, name,t,com)
{
  var upiLink1;
  upiLink= "upi://pay?pa=" + vpa + "&pn=" + name+"&cu="+t+"&tn="+com;

  return upiLink1;
}
