<?php
include('include/checksession.php');
if(isset($_REQUEST['actBtn'])) {
  $Title = addslashes($_REQUEST['Title']);
  $Stitle = $conn->real_escape_string($_REQUEST['Stitle']);
  $descripe = $conn->real_escape_string($_REQUEST['descripe']);

  $img_file = constant("IMG_PATH") . basename($_FILES["bImg"]["name"]);
  $imageType = strtolower(pathinfo($img_file,PATHINFO_EXTENSION));
  if($imageType != "jpg" && $imageType != "png" && $imageType != "jpeg" && $imageType != "gif" )
  {
    echo "<script>
            alert('Sorry, only JPG, JPEG, PNG & GIF files are allowed.');
            window.location.href = 'banner.php';
          </script>";    
  } else {
    $img_name = constant("IMG_PATH") . next_autoid($conn,$db,'banner').'_bimg.'.$imageType;
    move_uploaded_file($_FILES["bImg"]["tmp_name"], '../'.$img_name);
  }
  $btntxt = $conn->real_escape_string($_REQUEST['btntxt']);
  $btnlnk = $conn->real_escape_string($_REQUEST['btnlnk']);

  $sql = "INSERT INTO `banner`(`bTitle`, `bSubtitle`, `bDesc`, `bImg`, `bBtxt`, `bBLink`, `bUpdateon`) VALUES ('".$Title."', '".$Stitle."', '".$descripe."', '".$img_name."', '".$btntxt."', '".$btnlnk."', '".date('Y-m-d H:i:s')."')";
  $conn->query($sql);
  echo "<script>
          alert('Successfully Inserted');
          window.location.href = 'banner.php';
       </script>";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Add Banner</title>

  <?php include('include/header.php'); ?>
</head>
<body class="hold-transition sidebar-mini layout-fixed">
<div class="wrapper">

  <?php include('include/navbar.php'); ?>

  <?php include('include/sidebar.php'); ?>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Banner</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            &nbsp;
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <!-- left column -->
          <div class="col-md-9">
            <!-- general form elements -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Add Banner</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form action="" method="post" id="actFrm" enctype="multipart/form-data">
                <div class="card-body">
                  <div class="form-group">
                    <label>Title</label>
                    <textarea class="form-control" id="Title" name="Title" style="height: 150px;"></textarea>
                  </div>
                  <div class="form-group">
                    <label>Sub title</label>
                    <input type="text" class="form-control" id="Stitle" name="Stitle">
                  </div>
                  <div class="form-group">
                    <label>Description</label>
                    <input type="text" class="form-control" id="descripe" name="descripe">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputFile">Image</label>
                    <div class="input-group">
                      <div class="custom-file">
                        <input type="file" class="custom-file-input" id="bImg" name="bImg">
                        <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                      </div>
                    </div>
                    <span class="badge badge-danger">Note</span>Image should be 603 x 634
                  </div>
                  <div class="form-group">
                    <label>Button Text</label>
                    <input type="text" class="form-control" id="btntxt" name="btntxt">
                  </div>
                  <div class="form-group">
                    <label>Button Link</label>
                    <input type="text" class="form-control" id="btnlnk" name="btnlnk">
                  </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" name="actBtn" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
            <!-- /.card -->
          </div>
        </div>    
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  <?php include('include/footer.php'); ?>
 </div>
<!-- ./wrapper -->

<?php include('include/footer_js.php'); ?>

<!-- jquery-validation -->
<script src="plugins/jquery-validation/jquery.validate.min.js"></script>
<script src="plugins/jquery-validation/additional-methods.min.js"></script>

<!-- bs-custom-file-input -->
<script src="plugins/bs-custom-file-input/bs-custom-file-input.min.js"></script>

<script>
$(function () {
  bsCustomFileInput.init();

  $('#actFrm').validate({ 
    rules: {
      Title: {
        required: true
      },
      Stitle: {
        required: true
      },
      descripe: {
        required: true
      },
      bImg: {
        required: true,
        accept: "image/png, image/gif, image/jpeg, image/jpg"
      },
      btntxt: {
        required: true
      },
      btnlnk: {
        required: true
      },
    },
    messages: {
      Title: "Please enter title",
      Stitle: "Please enter subtitle",
      descripe: "Please enter description",
      bImg: {
        required: "Please select image",
        accept: "Please select valid image format. Accept format png, gif, jpeg and jpg"
      },
      btntxt: "Please enter text",
      btnlnk: "Please enter link"
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
      error.addClass('invalid-feedback');
      element.closest('.form-group').append(error);
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).removeClass('is-invalid');
    }
  });
});
</script>
</body>
</html>