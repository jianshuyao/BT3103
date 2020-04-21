<template>
<div id="contact" class="form-2">
    <div class="container">
        <div class="row">
            
            <!-- Map -->
            <div class="col-lg-6">
                <div class="text-container">
                    <h2>Talk to Us!</h2>
                    <ul class="list-unstyled li-space-lg">
                        <li class="address"><i class="fas fa-map-marker-alt"></i>21 Heng Mui Keng Terrace, Icube Building, Singapore 119613</li>
                        <li><i class="fas fa-envelope"></i><a href="mailto:office@withdrawal.com">TEAM@withdrawal.com</a></li>
                    </ul>
                    <iframe width="500" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=i3%20Auditorium&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div> <!-- end of text-container -->
            </div> <!-- end of col -->

            <!-- Contact Form -->
            <div class="col-lg-6">
                <form id="contactForm" data-toggle="validator" data-focus="false">
                    <div class="form-group">
                        <input type="text" class="form-control-input" id="cname" required placeholder='Name'>
                        <label class="label-control" for="cname"></label>
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control-input" id="cemail" required placeholder='Email'>
                        <label class="label-control" for="cemail"></label>
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control-textarea" id="cmessage" required placeholder='Message'> </textarea>
                        <label class="label-control" for="cmessage"></label>
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group checkbox">
                        <input type="checkbox" id="cterms" value="Agreed-to-Terms" required>I agree with the stated <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms Conditions</a> 
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="form-control-submit-button">SUBMIT MESSAGE</button>
                    </div>
                    <div class="form-message">
                        <div id="cmsgSubmit" class="h3 text-center hidden"></div>
                    </div>
                </form>
                <!-- end of contact form -->

            </div> <!-- end of col -->
            
        </div> <!-- end of row -->
    </div> <!-- end of container -->
</div> <!-- end of form-2 -->
        <!-- end of contact -->

</template>

<script>
  export default {
    name: 'Contact',
    data(){
      return {
        name: 'JSY',
        email: 'jianshuyao@u.nus.edu'
      }
    }
  }
</script>

<style scoped>

.form-group {
  color: black !important;
}

.form-2 .text-container {
  margin-bottom: 3rem !important;
  color: black !important;
}

.text-container{
    text-align: center !important;
}

</style>