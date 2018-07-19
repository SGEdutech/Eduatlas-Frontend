let modal = `<div class="modal fade" id="loginModal" tabindex="-1" role="">
    <div class="modal-dialog modal-login" role="document">
        <div class="modal-content">
            <div class="card card-signup card-plain">
                <div class="modal-header">
                    <div class="card-header card-header-info text-center">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            <i class="material-icons">clear</i>
                        </button>

                        <h4 class="card-title">Log in</h4>
                        <div class="social-line">
                            <a href="#pablo" class="btn btn-just-icon btn-link btn-white">
                                <i class="fa fa-facebook-square"></i>
                            </a>
                            <a href="/auth/google" class="btn btn-just-icon btn-link btn-white">
                                <i class="fa fa-google-plus"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <form class="form" method="POST" action="/auth/local/login">
                    <div class="modal-body">
                        <div class="card-body">
                            <div class="form-group bmd-form-group">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="material-icons">email</i></div>
                                    </div>
                                    <input type="email" class="form-control" placeholder="Email..." name="username">
                                </div>
                            </div>

                            <div class="form-group bmd-form-group">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="material-icons">lock_outline</i>
                                        </div>
                                    </div>
                                    <input type="password" class="form-control" placeholder="Password..."
                                           name="password">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-center">
                        <button type="submit" class="btn btn-info rounded px-4">Login</button>
                    </div>
                </form>
                <hr>
                <div class="container text-center">
                    <p>Don't have a account ?</p>
                    <a href="signup-page.html" class="btn btn-info rounded">SignUp</a>
                </div>
            </div>
        </div>
    </div>
</div>`;

$('#loginModalContainer').append(modal);