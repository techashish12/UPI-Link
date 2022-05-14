function getUPILink(vpa, name,r,t)
{
  var upiLink;
  upiLink= "upi://pay?pa=" + vpa + "&pn=" + name+"&am=" +r+"&cu="+t;
  return upiLink;
}
