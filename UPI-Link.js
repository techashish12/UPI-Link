function getUPILink(vpa, name,r,t,com)
{
  var upiLink;
  upiLink= "upi://pay?pa=" + vpa + "&pn=" + name+"&am=" +r+"&cu="+t+"&tn="+com;
  console.log(upilink);
  return upiLink;
}
