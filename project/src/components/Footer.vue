<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-light" style="background-color: #ededed;">
      <div class="container-fluid">
        <div class="navbar-header">
          <p class="copyright-text">Copyright &copy; BT3103 All Rights Reserved by Team Withdrawal
            </p>
        </div>
        <ul class="nav navbar-nav social-icons">
          <li>
                <a class="github" href="https://github.com/jianshuyao/BT3103/tree/master/project">
                  <i class="fab fa-github" title="View Code in GitHub"></i>
                </a>
              </li> 
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.copyright-text{
  font-size: 15px !important;
}

.site-footer
{
  background-color:#ededed;
  padding:15px 10px;
  font-size:15px;
  line-height:24px;
  height:auto;
  color:#737373;
}
.site-footer .container{
  width: 100%;
  height: 30px;
  text-align: center;
}
.site-footer a
{
  color:#737373;
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.site-footer .social-icons
{
  text-align:right
}
.site-footer .social-icons a
{
  width:40px;
  height:auto;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:#828282;
  color:#fff;
}
.copyright-text
{
  margin:10px;
  color: #828282
}
.social-icons
{
  padding-left:0;
  margin-bottom:0;
  list-style:none;
}
.social-icons ul{
  text-align:right;
}
.social-icons li
{
  display:inline-block;
  margin-right: 10px;
}
.social-icons li.title
{
  margin-right:15px;
  text-transform:uppercase;
  color:#96a2b2;
  font-weight:700;
  font-size:15px
}

.social-icons a{
  background-color:#828282;
  color:#fff !important;
  font-size:25px;
  display:inline-block;
  line-height:44px;
  width:44px;
  height:auto;
  text-align:center;
  margin-right:8px;
  border-radius:100%;
  -webkit-transition:all .2s linear;
  -o-transition:all .2s linear;
  transition:all .2s linear
}
.social-icons a:active,.social-icons a:focus,.social-icons a:hover
{
  color:#fff;
  background-color:#29aafe;
}
.social-icons.size-sm a
{
  line-height:34px;
  height:auto;
  width:34px;
  font-size:14px
}
.social-icons a.github:hover
{
  background-color:#000
}


.social-icons a.twitter:hover
{
  background-color:#29aafe
}

/* @media (max-width:767px)
{
  .social-icons li.title
  {
    display:block;
    margin-right:0;
    font-weight:600
  }
} */
</style>