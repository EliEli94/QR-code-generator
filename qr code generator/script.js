function ShowCode()
{
    var qrlink;
    var qrimg = document.getElementById("QrImage");
    var qrtext = document.getElementById("TextBox").value;
    var qrsize = document.getElementById("size").value;
    var trans = document.getElementById("trans");
    if (trans.checked)
    {
        qrlink = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";

    }
    else{
        qrlink = "https://chart.googleapis.com/chart?cht=qr&chs=";
    }
    if (qrtext!=="" && qrsize=="100")
        {
            qrimg.src=qrlink+"100x100"+"&chl="+qrtext;
            // https://chart.googleapis.com/chart?cht=qr&chs=100x100&chl=hello
        }

        else if(qrtext!=="" && qrsize=="150")
        {

            qrimg.src=qrlink+"150x150"+"&chl="+qrtext;
            // https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=hello
        }

        else if(qrtext!=="" && qrsize=="200")
        {
            qrimg.src=qrlink+"200x200"+"&chl="+qrtext;
            // https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=hello
        }

        else if (qrtext!=="" && qrsize=="250")
        {
            qrimg.src=qrlink+"250x250"+"&chl="+qrtext;
            // https://chart.googleapis.com/chart?cht=qr&chs=250x250&chl=hello
        }

        else if (qrtext!=="" && qrsize=="300")
        {
            qrimg.src=qrlink+"300x300"+"&chl="+qrtext;
            // https://chart.googleapis.com/chart?cht=qr&chs=250x250&chl=hello
        }

        else
        {
            alert("Please Enter Text");
        }
}