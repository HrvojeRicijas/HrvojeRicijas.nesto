<!DOCTYPE html>
<html>
    <head>
        <title>Miš!</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">


        <script type="text/javascript" src="clicky.js"></script>

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full{
                flex: 1;
                display:inline-flex;
                flex-direction: column;
            }

            .buybutton{
                flex: 1;
                height: 80%;
            }
        </style>
    </head>

    <body onload="startup()">
        <div style="height: 100%; display: inline-flex; width: 100%">
            <div style="display: inline-flex; height: 100%; width: 80%">
                <input type="button" value="0" id="clickbutton" onclick="clickevent()" style="flex: 1">
            </div><div style="display: inline-flex;flex-direction: column; height: 100%; width: 20%">

                <div class="full">
                    <button type="button" value="0" id="autobutton0" onclick="buyauto(0)" class="buybutton">0</button>

                        <label id="autoprice0">Price: 10</label>
                        <label id="autoproduction0">Production: 0</label>

                </div>

                <div class="full">
                    <button type="button" value="0" id="autobutton1" onclick="buyauto(1)" class="buybutton">0</button>

                        <label id="autoprice1">Price: 100</label>
                        <label id="autoproduction1">Production: 0</label>

                </div>

                <div class="full">
                    <button type="button" value="0" id="autobutton2" onclick="buyauto(2)" class="buybutton">0</button>

                       <label id="autoprice2">Price: 500</label>
                       <label id="autoproduction2">Production: 0</label>

                </div>

                <div class="full">
                    <button type="button" value="0" id="autobutton3" onclick="buyauto(3)" class="buybutton">0</button>

                    <label id="autoprice3">Price: 2500</label>
                    <label id="autoproduction3">Production: 0</label>

                </div>

                <div class="full">
                    <button type="button" value="0" id="autobutton4" onclick="buyauto(4)" class="buybutton">0</button>

                    <label id="autoprice4">Price: 10000</label>
                    <label id="autoproduction4">Production: 0</label>

                </div>

            </div>
        </div>
    </body>
</html>

