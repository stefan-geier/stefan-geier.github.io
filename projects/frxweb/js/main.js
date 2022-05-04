$(document).ready(function () {


    //BROWSER LANGUAGE CONDITIONAL
    //GETS THE BROSWER LANGUAGE 
    var germanIndexPage = "https://www.frox.shop/de/index.html",
        italianIndexPage = "https://www.frox.shop/it/index.html",
        browserLanguage = navigator.language || navigator.userLanguage,
        browserIsInGerman = browserLanguage === "de";

        console.log(browserIsInGerman);

        //IF THE BROWSER IS GERMAN REDIRECT TO GERMAN INDEX PAGE
        if($('body').is('#languageRedirect') && browserIsInGerman){
            // console.log("Redirect to german");
            window.location.replace(germanIndexPage);
        }

        //IF THE BROWSER IS ANY OTHER LANGUAGE REDIRECT TO ITALIAN INDEX PAGE
        if($('body').is('#languageRedirect') && !browserIsInGerman){
            // console.log("Redirect to italian");
            window.location.replace(italianIndexPage);
        }



    //SVG ELEMENTS
    var
        facebookSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><g id="right_chevron_icon"><rect class="cls-1" x="2.12" y="1.62" width="996.75" height="996.75" /><g id="WfuXmo"><path class="cls-2" d="M533.73,998.38c-.7-8.76-2-17.51-2-26.26-.14-110.72-.6-221.44.36-332.15.19-20.72-6.12-26.83-26.32-25.62-27.95,1.66-56.09-.2-84.11.65-14.69.45-21.43-3.55-21.11-19.6q1.2-60.87,0-121.77c-.29-15.5,5.4-20.81,20.65-20.49,35.35.75,70.73.24,108.55.24.7-9.16,1.76-16.89,1.81-24.63.18-33.95,0-67.9.09-101.85C531.82,227.14,604,151.51,704,147.81c40.54-1.5,81.18.08,121.77-.56,14.27-.22,19.57,4.78,19.27,19.28q-1.12,54.24,0,108.5c.29,14.23-4.45,20-19,19.59-26.56-.68-53.15-.51-79.71,0-32.67.68-52.43,19.85-53.3,52.32-.78,28.77.43,57.59-.49,86.35-.49,15.4,4.93,20.69,20.36,20.28,33.93-.9,67.9-.35,101.86-.19,7.92,0,15.85.83,26.85,1.46-3.88,32.56-7.38,63.06-11.18,93.52-1.82,14.62-5.75,29.16-6,43.77-.29,20.26-10.44,23.6-28,23-33.06-1.22-66.2-.35-103.26-.35V998.38Z" /></g></g></svg>',
        instagramSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><g id="right_chevron_icon"><rect class="cls-1" x="1" y="0.5" width="999" height="999" /><path class="cls-2" d="M866.36,542.51c-.11-39.28,0-78.56-.33-117.84-.3-37-.21-74-5.27-110.8-4.48-32.53-14.53-63.23-33.22-90.49C803,187.5,769.71,163,728.2,149.62c-24.14-7.77-49-11-74.14-12.77-31.45-1.34-62.92-2.09-94.4-2-64.1.15-128.2-.86-192.29,1.28-32.17,1.06-64.12,3.44-95,13.6-29.33,9.65-55.07,24.91-77,46.84-21.54,21.55-36.33,47-45.79,75.75-1.2,3.64-2.31,7.3-3.45,10.95-9.9,37.09-10.17,75.16-11,113.11-.64,27.43-.39,54.87-.56,82.31,0,1.94-.18,3.88-.28,5.81.09,5.67.25,11.34.26,17q0,37.93,0,75.85c0,7.25.74,14.46-.38,21.75-.55,3.51.78,7.28.88,10.94.8,29,1.32,58.14,6.12,86.79A218.13,218.13,0,0,0,158.57,752a184.63,184.63,0,0,0,31.62,47.43c7.23,6.9,14,14.46,21.83,20.53,10.74,8.27,22,15.84,34.61,21.36,19.76,8.64,39.93,16,61.22,19.32a392,392,0,0,0,46.68,4.15c63.9,2.07,127.82,1.47,191.73,1.6,4.52,0,9.06-.65,13.56.36,19.52-.34,39-.53,58.56-1,13.46-.36,26.93-1,40.38-1.8,43.19-2.56,84.17-12.45,120.65-37,14-10.82,27.15-22.44,38.48-36.17,18.94-23,30.57-49.4,37.92-77.9,5.08-19.68,6.79-39.81,8.09-60.07,2.24-34.81,1.7-69.67,2.72-104.49C866.53,546.39,866.36,544.45,866.36,542.51ZM800,596.8c0,2.27-.28,4.52-.43,6.79-.73,32.74-.19,65.61-8.9,97.6-6.16,22.65-16.57,42.91-34.29,58.87a107.55,107.55,0,0,1-29.92,21.24c-21.59,10.17-44.49,15-68.18,16.48-56.25,3.53-112.58,2.62-168.88,2.7-17,0-34.08-.11-51.12-.17-7.45.06-14.89.3-22.33.15-28.5-.58-57-.73-85.4-3.7-19-2-37.31-6.45-54.66-14.56-3.05-1.43-6.28-2.62-8.84-5-30-17.55-48.18-43.89-57.16-77.1-5-18.42-6.59-37.24-7.43-56.17-.87-19.6-1.6-39.2-1.5-58.82-.63-15.19-.57-30.39-.28-45.58q-.24-33.24-.46-66.48a22.38,22.38,0,0,1,.48-3.31c-.45-30.7,0-61.38.94-92.05.55-17.34,1.09-34.68,3.32-51.93,8.22-63.64,44.37-106.52,108.82-118.68,25-4.71,50.38-5.18,75.68-5.64q112.75-2.07,225.52.06c20.28.38,40.65.54,60.73,3.78,36.75,5.94,70,18.9,93.49,49.82,15.41,20.28,23,43.7,26.3,68.57,4.68,35.49,4.49,71.27,4.71,107C800.52,486.06,800.63,541.43,800,596.8Z" /><path class="cls-2" d="M674.7,429.43c-.72-1.44-1.48-2.86-2.14-4.33-18.78-41.65-48.08-73.9-89.53-93C511,299,442.94,307.19,380.2,356.19c-11.19,8.74-20.61,19.34-29.52,30.21-6.21,7.58-10.71,16.55-16,24.9-3.21,7.69-7.55,14.84-10.24,22.83-4.71,14-9.37,28-10.47,42.85-.29,3.84-2.06,7.36-1.85,11.37.52,10,.64,20.07.92,30.1.67,4.66,1.26,9.33,2,14,13.65,81,80.87,147.17,167.51,155.28a184.87,184.87,0,0,0,45.15-1.15c45-6.84,82.66-27.38,113.15-61.15a203,203,0,0,0,20.53-28.24c22.47-37.39,30.34-77.72,25.32-120.83C684.88,460.12,680,444.74,674.7,429.43Zm-57.83,106a154.63,154.63,0,0,1-11.18,26.48,109.15,109.15,0,0,1-20.76,26.57c-1.21,1.16-2.12,3-4.29,2.76C561,610.48,536.88,620.23,510,622c-46.9,3.08-84.09-15.52-111-53.87a105.05,105.05,0,0,1-18.65-48.48c-3.91-20.62-1.64-40.73,5.42-60.3,18.68-51.75,70.87-85.43,124.08-80.29,57.37,5.53,102,46.4,110.94,102.21A114,114,0,0,1,616.87,535.39Z" /><path class="cls-2" d="M695.82,261.5a43.9,43.9,0,0,0-.45,87.8,43.9,43.9,0,1,0,.45-87.8Z" /></g></svg>',
        websiteSVG = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000"><path class="cls-1" d="M617.1,630.19A530.54,530.54,0,0,0,467.64,1000"/><path class="cls-1" d="M998,467.67l-1.8,0"/><path class="cls-1" d="M467.64,1000c0,144.59,57.67,275.69,151.23,371.62"/><path class="cls-1" d="M618.87,1371.62c95.73,98.17,229,159.48,376.7,160.68"/><path class="cls-1" d="M617.1,630.19c96-99.36,230.28-161.46,379.09-162.5"/><path class="cls-1" d="M1380.66,627.89c-95.55-97.73-228.41-158.8-375.55-160.18"/><path class="cls-1" d="M1532.36,1000c0-144.83-57.86-276.13-151.7-372.11"/><path class="cls-1" d="M998,467.67l2,0c1.71,0,3.41.05,5.11.07"/><path class="cls-1" d="M1003.3,1532.32c-1.1,0-2.2,0-3.3,0l-2,0"/><path class="cls-1" d="M1380.09,1372.69c-95.9,97.79-229.21,158.73-376.79,159.63"/><path class="cls-1" d="M1380.09,1372.69c94.17-96,152.27-227.57,152.27-372.69"/><path class="cls-1" d="M998,1532.33c-.81,0-1.61,0-2.42,0"/><line class="cls-1" x1="1282.62" y1="1000" x2="997.99" y2="1000"/><line class="cls-1" x1="467.64" y1="1000" x2="717.48" y2="1000"/><line class="cls-1" x1="467.64" y1="1000" x2="466.84" y2="1000"/><line class="cls-1" x1="1282.62" y1="1000" x2="1532.36" y2="1000"/><line class="cls-1" x1="717.48" y1="1000" x2="997.99" y2="1000"/><line class="cls-1" x1="997.99" y1="472.5" x2="997.99" y2="754.8"/><line class="cls-1" x1="997.99" y1="1247.26" x2="997.99" y2="1000"/><line class="cls-1" x1="997.99" y1="1532.76" x2="997.99" y2="1532.33"/><line class="cls-1" x1="997.99" y1="467.67" x2="997.99" y2="467.24"/><line class="cls-1" x1="997.99" y1="1000" x2="997.99" y2="754.8"/><line class="cls-1" x1="997.99" y1="472.5" x2="997.99" y2="468.89"/><line class="cls-1" x1="997.99" y1="1532.33" x2="997.99" y2="1247.26"/><line class="cls-1" x1="997.99" y1="468.89" x2="997.99" y2="467.67"/><path class="cls-1" d="M996.19,467.69l1.8,1.2"/><path class="cls-1" d="M1282.62,1000a639.46,639.46,0,0,0-66.88-283.3"/><path class="cls-1" d="M1000.65,470.68a645.1,645.1,0,0,1,215.09,246"/><path class="cls-1" d="M1003.3,1532.32a645,645,0,0,0,213.8-247"/><path class="cls-1" d="M1003.3,1532.32l-3.85,2.64"/><path class="cls-1" d="M1217.1,1285.34a639.57,639.57,0,0,0,65.54-282.93c0-.81,0-1.61,0-2.41"/><path class="cls-1" d="M998,468.89l2.66,1.79"/><path class="cls-1" d="M999.45,1535q-2-1.32-3.88-2.66"/><path class="cls-1" d="M783.88,718.48A639.53,639.53,0,0,0,717.48,1000"/><path class="cls-1" d="M1000.65,470.68q2.22-1.5,4.46-3"/><path class="cls-1" d="M782.27,1284.67a639.51,639.51,0,0,1-64.81-281.44c0-1.08,0-2.15,0-3.23"/><path class="cls-1" d="M782.27,1284.67a644.91,644.91,0,0,0,213.3,247.63"/><path class="cls-1" d="M998,472.5a645.11,645.11,0,0,0-214.11,246"/><path class="cls-1" d="M998,472.5l2.66-1.82"/><path class="cls-1" d="M1215.74,716.7A641.13,641.13,0,0,1,998,754.8"/><path class="cls-1" d="M1215.74,716.7a640.9,640.9,0,0,0,164.92-88.81"/><path class="cls-1" d="M998,754.8h-.66a641.09,641.09,0,0,1-213.45-36.33"/><path class="cls-1" d="M617.1,630.19a640.43,640.43,0,0,0,166.78,88.29"/><path class="cls-1" d="M998,1247.26a640.64,640.64,0,0,0-215.72,37.41"/><path class="cls-1" d="M618.87,1371.62a640.53,640.53,0,0,1,163.4-86.95"/><path class="cls-1" d="M1380.09,1372.69a640.31,640.31,0,0,0-163-87.35"/><path class="cls-1" d="M998,1247.26h.77a640.75,640.75,0,0,1,218.34,38.09"/></svg>',
        emailSVG = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000"><rect class="cls-1" x="454.57" y="599.5" width="1090.87" height="801.01" rx="94.32"/><path class="cls-1" d="M508.86,654.36C664.7,811.24,766.24,913.25,922.08,1070.13c4.08,5,28.73,34.26,71.69,37.4,44.2,3.23,73.37-23.71,77.92-28,157.91-160,263.21-265.13,421.13-425.12"/><path class="cls-1" d="M508.86,1346.2c131.94-134,209.59-213.74,341.54-347.76"/><path class="cls-1" d="M1492.82,1344.66c-124.68-130.9-196.73-206-321.4-336.87"/></svg>',
        phoneSVG = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000"><path class="cls-1" d="M632.54,465.22C549,465.7,489,560.59,470.21,630.56c-14.06,52.2-5.33,96.85,0,120.24C525,991.53,707.69,1195.72,707.69,1195.72s210,234.73,472,318.65c95.12,30.48,151.14,21.93,189.39,6,27.54-11.45,47.12-27.23,84.18-57.11,50.66-40.85,84.17-67,84.17-102.21,0-72.15-170.39-262.59-262-261.77-30.7.27-122,116-146.83,120.48-86.12,15.45-354.18-247.66-360.28-335.52-3.65-52.73,143.58-127.72,119.78-199.58C855.91,587.58,713.71,464.74,632.54,465.22Z"/></svg>',
        goToIcon = '<svg id="map_link_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path    class="cls-1" d="M476.76,76H907a38.63,38.63,0,0,1,38.51,38.52V544.76"/><path class="cls-1" d="M809.93,634.54V852.29A86.92,86.92,0,0,1,723.27,939H178.86A86.92,86.92,0,0,1,92.2,852.29V307.88a86.92,86.92,0,0,1,86.66-86.66H396.61"/><line class="cls-1" x1="932.35" y1="101.37" x2="468.14" y2="565.59"/></svg>',
        chevronIcon = '<svg id="delivery_chevron" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><polyline class="cls-1" points="295.79 944.29 728.21 512.12 295.79 79.7"/></svg>',
        deliveryIcon = '<svg id="delivery_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000"><g id="Delivery"><path id="Path_1666" data-name="Path 1666" class="cls-1" d="M529.82,1113.29H331.4A92.37,92.37,0,0,1,239,1020.92V558.26a92.4,92.4,0,0,1,92.36-92.41h745.73a92.4,92.4,0,0,1,92.37,92.37V735.44"/><path id="Path_1667" data-name="Path 1667" class="cls-1" d="M456.31,1312.57h-52a56.42,56.42,0,0,1-56.42-56.43h0v-86a56.42,56.42,0,0,1,56.42-56.38h666.81a99.41,99.41,0,0,0,99.41-99.41h0V693.25a55.35,55.35,0,0,1,55.35-55.36h211.62a98.09,98.09,0,0,1,76.2,33.33,1725.2,1725.2,0,0,1,122.57,214.43A219.38,219.38,0,0,1,1655.37,977V1256.3a56.43,56.43,0,0,1-56.42,56.43h-40.69"/><line id="Line_589" data-name="Line 589" class="cls-1" x1="1273.02" y1="1312.57" x2="723.6" y2="1312.57"/><circle id="Ellipse_1" data-name="Ellipse 1" class="cls-1" cx="589.48" cy="1381.96" r="151"/><circle id="Ellipse_2" data-name="Ellipse 2" class="cls-1" cx="1407.18" cy="1381.96" r="151"/><path id="delivery_truck_window" data-name="Path 1668" class="cls-1" d="M1458.46,992.17H1340.67a52,52,0,0,1-52-51.95h0V807a52,52,0,0,1,52-51.95h44.68A52,52,0,0,1,1430.86,782l73.19,133.17a51.95,51.95,0,0,1-45.59,77Z"/></g></svg>',
        ecoIcon = '<svg id="eco_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path class="cls-1" d="M479.69,348.66a1650.62,1650.62,0,0,1,155.64,235.5A1654.24,1654.24,0,0,1,779.51,944.63"/><path class="cls-1" d="M730.68,685.22a162.06,162.06,0,0,1-19.78,19.12c-95.26,77.28-249,14-303.7-84.68-36.27-65.42-51.56-135.49-54.63-202.74C344.42,238.3,422.41,79.37,422.41,79.37,428.08,217.7,665.65,289.9,734.48,373.58,798.26,451.11,819.13,584,730.68,685.22Z"/><path class="cls-1" d="M388,815.82C161.5,662.63,156.87,327.21,156.87,327.21,191,388,269.92,407.26,352.57,416.92c3.07,67.25,18.36,137.32,54.63,202.74,54.71,98.7,208.44,162,303.7,84.68q-1.8,11.6-4.79,23.41C671.7,863.47,488.29,883.62,388,815.82Z"/><path class="cls-1" d="M648.87,734.47A1656.65,1656.65,0,0,1,867.13,936.92"/><path class="cls-1" d="M329.9,541.37q23.61,10.86,48.54,23.3"/></svg>',
        bicycleIcon = '<svg id="bicycle_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000"><circle id="Ellipse_1" data-name="Ellipse 1" class="cls-1" cx="1457.36" cy="1287.28" r="247.72"/><circle id="Ellipse_1-2" data-name="Ellipse 1" class="cls-1" cx="543.21" cy="1287.28" r="247.72"/><line class="cls-1" x1="543.21" y1="1287.28" x2="988.01" y2="1263.22"/><line class="cls-1" x1="797.46" y1="895.14" x2="1315.07" y2="815.12"/><line class="cls-1" x1="988.01" y1="1263.22" x2="699.22" y2="705.37"/><line class="cls-1" x1="543.21" y1="1287.28" x2="797.46" y2="895.14"/><line class="cls-1" x1="988.01" y1="1263.22" x2="1315.07" y2="815.12"/><line class="cls-1" x1="1457.36" y1="1287.28" x2="1256.89" y2="622.09"/><line class="cls-1" x1="800.1" y1="705.37" x2="586.86" y2="705.37"/><line class="cls-1" x1="1256.89" y1="622.09" x2="1408.36" y2="546.66"/></svg>';



    //DEVICE BREAKPOINT SIZES
    var mobileBreakPoint = 480,
        tabletBreakPoint = 768,
        desktopBreakPoint = 1200,
        lrgDesktopBreakpoint = 1500;

    //CALCULATES IF VALUE IS EVEN
    //FOR PLACING ITEMS IN RESPECTIVE COLUMNS
    function isEven(value) {
        if (value % 2 == 0)
            return true;
        else
            return false;
    }

    //CALCULATES IF VALUE IS DIVISIBLE BY THREE
    //FOR PLACING ITEMS IN RESPECTIVE COLUMNS
    function divisibleByThree(value) {
        if ((value + 2) % 3 == 0) {
            return "first"
        }
        if ((value + 1) % 3 == 0) {
            return "second"
        }
        if (value % 3 == 0) {
            return "third"
        }
    }

    //GETS UP TO DATE WINDOW WIDTH
    var $windowWidth = $(window).width();
    $(window).resize(function () {
        $windowWidth = $(window).width();
    });

    //JSON REQUEST VARIABLE
    var request = new XMLHttpRequest();

    //====================================================
    //HEADER
    //====================================================

    //OPEN MOBILE SLIDING MENU
    $('.hamburger-menu').click(function () {
        $(this).parent().addClass('open');
        //        console.log("menu opened")
    });

    //CLOSE MOBILE SLIDING MENU
    $('#nav_exit_icon').click(function () {
        $(this).parent().parent().parent().removeClass('open');
        //        console.log("menu closed")
    });

    //HIDES AND SHOWS DESKTOP HEADER
    $(window).resize(function () {
        //IF STATEMENTS FOR DEVICE SIZES
        var isDesktopDevice = $windowWidth >= desktopBreakPoint,
            isSmallerThanDesktop = $windowWidth < desktopBreakPoint;

        //CHECK IF WINDOW IS DESKTOP SIZE
        if (isDesktopDevice) {
            var prevScrollpos = window.pageYOffset,
                headerHeight = $('header').outerHeight();

            //SET DEFAULT LOAD STYLES
            $("header").css({
                'top': "0px"
            });
            $(".fixed-download-button").css({
                'top': "calc(16px + " + headerHeight + "px)"
            });

            //RUN FUNCTION WHEN USER SCROLLS
            $(window).on('scroll', function () {
                var currentScrollPos = window.pageYOffset;
                isSmallerThanDesktop = $windowWidth < desktopBreakPoint;

                //IF USER SCROLLS UP 
                if (prevScrollpos > currentScrollPos && isSmallerThanDesktop !== true) {

                    //SHOW HEADER
                    $("header").css({
                        'top': "0",
                        'box-shadow': '3px 3px 10px #60606060'
                    });

                    //MOVE FIXED DOWNLOAD BUTTON
                    $(".fixed-download-button").css({
                        'top': "calc(16px + " + headerHeight + "px)"
                    });
                }

                //IF USER SCROLLS DOWN
                if (prevScrollpos < currentScrollPos && isSmallerThanDesktop !== true) {

                    //HIDE HEADER
                    $("header").css({
                        'top': "-" + headerHeight + "px",
                        'box-shadow': 'none'
                    });

                    //MOVE FIXED DOWNLOAD BUTTON
                    $(".fixed-download-button").css({
                        'top': "16px"
                    });
                }

                prevScrollpos = currentScrollPos;
            });

            //RUN FUNCTION WHEN USER MOVES MOUSE
            $(window).on('mousemove', function () {
                var currentMouseYPos = event.pageY,
                    $windowHeight = $(window).height(),
                    $topWindowArea = $windowHeight / 4,
                    mouseAtTop = event.clientY < $topWindowArea;
                isSmallerThanDesktop = $windowWidth < desktopBreakPoint;

                //IF USER MOVES MOUSE TO TOP OF WINDOW
                if (mouseAtTop && isSmallerThanDesktop !== true) {

                    //SHOW HEADER
                    $("header").css({
                        'top': "0",
                        'box-shadow': '3px 3px 10px #60606060'
                    });

                    //MOVE FIXED DOWNLOAD BUTTON
                    $(".fixed-download-button").css({
                        'top': "calc(16px + " + headerHeight + "px)"
                    });

                }
            });

        }

        //CHECKS IF WINDOW IS SMALLER THAN DESKTOP
        if (isSmallerThanDesktop) {

            //RETURNS ALL VALUES TO DEFAULT
            $("header").css({
                'top': "16px",
                'box-shadow': '3px 3px 10px #60606060'
            });
            $(".download-frox-fixed-wrapper").css({
                'top': "16px"
            });

            $('.download-frox-wrapper').css({
                'top': 'auto',
                'bottom': '16px'
            })
        }


    }).resize();

    //IF USER IS AT THE TOP OF WINDOW MAKE FROX LOGO DISPLAY
    $(window).scroll(function () {
        if ($(window).scrollTop() != 0) {
            $('.hamburger-menu').addClass('small-menu-button');
        } else {
            $('.hamburger-menu').removeClass('small-menu-button');
        }
    });




    //====================================================
    //DOWNLOAD FROX BUTTONS
    //====================================================

    //GET DOWNLOAD BUTTON OFFSET AND CHANGE TO FIXED POSITION
    if ($('body').is('#index_de') || $('body').is('#index_it')) {


        var $inlineDownloadButton;
        //WHEN USER RESISZES WINDOW >> CHECK WINDOW SIZE >> CHOOSE FIXED BUTTON
        $(window).resize(function () {
            if ($windowWidth <= tabletBreakPoint) {
                $inlineDownloadButton = $('.download-frox-wrapper.mobile');
            }
            if ($windowWidth > tabletBreakPoint) {
                $inlineDownloadButton = $('.download-frox-wrapper.large-tablet');
            }
        }).resize();

        var $downloadButton = $('.download-frox-fixed-wrapper'),
            $downloadButtonHeight = $downloadButton.height(),
            $downloadButtonXPosition = $inlineDownloadButton.offset().top;

        //WHEN USER SCROLLS
        $(window).scroll(function () {

            //IF USER SCROLLS PAST BUTTON CHANGE TO FIXED POSITION
            if ($(window).scrollTop() >= $downloadButtonXPosition) {

                $downloadButton.addClass('fixed-download-button');
                $('.download-frox-desktop').addClass('ultra-light-card');
                $('.download-frox-wrapper').addClass('fixed-download-button');

            } else {
                $downloadButton.removeClass('fixed-download-button');
                $('.download-frox-desktop').removeClass('ultra-light-card')
                $('.download-frox-wrapper').removeClass('fixed-download-button');

            }


        });

        //OPENS AND CLOSES FAQ CARD WHEN CLICKED
        $('.faq-question').click(function () {
            $(this).parent().toggleClass('open');
        });


    }

    //IF USER IS AT THE TOP OF WINDOW MAKE FROX LOGO DISPLAY
    if ($(window).scrollTop() != 0) {
        $('.hamburger-menu').addClass('small-menu-button');
    } else {
        $('.hamburger-menu').removeClass('small-menu-button');
    }

    //GET DEVICE TYPE AND REDIRECT TO APP STORE OR PLAY STORE
    //IF DEVICE IS ANDRIOD
    if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
        $('.downloadFroxDe').attr("href", 'https://play.google.com/store/apps/details?id=com.frox.app&hl=de');
        $('.downloadFroxIt').attr("href", 'https://play.google.com/store/apps/details?id=com.frox.app&hl=it');
        $('.download-frox-desktop').css({
            'display': 'none'
        });
    }
    //IF DEVICE IS APPLE
    else if (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) {
        $('.downloadFroxDe').attr("href", 'https://apps.apple.com/de/app/frox/id1484224116');
        $('.downloadFroxIt').attr("href", 'https://apps.apple.com/it/app/frox/id1484224116');
        $('.download-frox-desktop').css({
            'display': 'none'
        });
    }
    // IF DEVICE IS NOT MOBILE
    else {
        $('.download-frox-mobile').css({
            'display': 'none'
        });
        $('.download-frox-mobile-text').css({
            'display': 'none'
        });
    }



    //====================================================
    //MOVABLE FOOTER
    //====================================================

    //CHECKS IS PAGE IS LEGAL
    function checkIfLegal() {
        if ($('body').hasClass('legal-page')) {
            return "../legal/"
        } else {
            return "legal/"
        }
    }

    //FOOTER CONTENT TO ADD TO ELEMENTS
    var websiteText = "www.frox.shop",
        websiteLinkDe = "https://www.frox.shop/de/",
        websiteLinkIt = "https://www.frox.shop/it/",
        emailText = "support@frox.shop",

        phoneText = "+39 0471 941 111",
        phoneLink = "+39-0471-941-111",

        legalPrivacyTextDe = "Privacy",
        legalPrivacyTextIt = "Privacy",
        legalPrivacylinkDe = checkIfLegal() + "privacy.html",
        legalPrivacylinkIt = checkIfLegal() + "privacy.html",

        legalImprintTextDe = "Impressum",
        legalImprintTextIt = "Impronta",
        legalImprintlinkDe = checkIfLegal() + "impressum.html",
        legalImprintlinkIt = checkIfLegal() + "impronta.html",

        legalTCTextDe = "AGB´s",
        legalTCTextIt = "Condizioni",
        legalTClinkDe = checkIfLegal() + "agbs.html",
        legalTClinkIt = checkIfLegal() + "condizioni.html",

        facebookLink = 'https://www.facebook.com/froxshop/',
        instagramLink = 'https://www.instagram.com/frox_shop/?hl=it';


    //BUILDING FOOTER HTML ELEMENTS
    var footerElement = $('<footer class="dark-background"></footer>'),
        footerFlexWrapper = $('<div class="footer-flex-wrapper"></div>'),
        footerContactFlex = $('<div class="footer-contact-flex"></div>'),
        footerLegalLinksWrapper = $('<div class="footer-legal-links-wrapper"></div>'),
        footerSocialWrapper = $('<div class="footer-socials-wrapper"></div>'),
        footerConactLineElement = $('<div class="footer-contact-line"></div>'),
        footerContactDetails = $('<div class="footer-contact-details"></div>'),
        footerWebsiteElementDe = $('<a target="_blank" href="' + websiteLinkDe + '"><div>' + websiteSVG + '<p>' + websiteText + '</p></div>'),
        footerWebsiteElementIt = $('<a target="_blank" href="' + websiteLinkIt + '"><div>' + websiteSVG + '<p>' + websiteText + '</p></div>'),
        footerEmailElement = $('<a href="mailto:' + emailText + '"><div>' + emailSVG + '<p>' + emailText + '</p></div></a>'),
        footerPhoneElement = $('<a target="_blank" href="tel:' + phoneLink + '"><div>' + phoneSVG + '<p>' + phoneText + '</p></div>'),
        footerPrivacyElementDe = $('<a target="_blank" href="' + legalPrivacylinkDe + '"><div class="light-card"><p>' + legalPrivacyTextDe + '</p></div></a>'),
        footerPrivacyElementIt = $('<a target="_blank" href="' + legalPrivacylinkIt + '"><div class="light-card"><p>' + legalPrivacyTextIt + '</p></div></a>'),
        footerImprintElementDe = $('<a target="_blank" href="' + legalImprintlinkDe + '"><div class="light-card"><p>' + legalImprintTextDe + '</p></div></a>'),
        footerImprintElementIt = $('<a target="_blank" href="' + legalImprintlinkIt + '"><div class="light-card"><p>' + legalImprintTextIt + '</p></div></a>'),
        footerTCElementDe = $('<a target="_blank" href="' + legalTClinkDe + '"><div class="light-card"><p>' + legalTCTextDe + '</p></div></a>'),
        footerTCElementIt = $('<a target="_blank" href="' + legalTClinkIt + '"><div class="light-card"><p>' + legalTCTextIt + '</p></div></a>'),
        facebookButton = $('<a target="_blank" href="' + facebookLink + '"></a>'),
        instagramButton = $('<a target="_blank" href="' + instagramLink + '"></a>');

    var isNotAboutUsPage = !$('body').hasClass('no-footer');


    //APPENDING GENERAL HTML ELEMENTS
    facebookButton.append(facebookSVG);
    instagramButton.append(instagramSVG);
    footerSocialWrapper.append(facebookButton, instagramButton);

    //APPENDING GERMAN SPECIFIC HTML ELEMENTS
    if ($('html').attr('lang') == 'de') {
        footerContactDetails.append(footerEmailElement, footerPhoneElement);
        footerContactFlex.append(footerSocialWrapper, footerConactLineElement, footerContactDetails);
        footerLegalLinksWrapper.append(footerPrivacyElementDe, footerImprintElementDe, footerTCElementDe);
        footerFlexWrapper.append(footerContactFlex, footerLegalLinksWrapper);
        footerElement.append(footerFlexWrapper);
    }

    //APPENDING ITALIAN SPECIFIC HTML ELEMENTS
    if ($('html').attr('lang') == 'it') {
        footerContactDetails.append(footerEmailElement, footerPhoneElement);
        footerContactFlex.append(footerSocialWrapper, footerConactLineElement, footerContactDetails);
        footerLegalLinksWrapper.append(footerPrivacyElementIt, footerImprintElementIt, footerTCElementIt);
        footerFlexWrapper.append(footerContactFlex, footerLegalLinksWrapper);
        footerElement.append(footerFlexWrapper);
    }

    //PLACES FOOTER DEPENDING ON WINDOW SIZE
    $(window).resize(function () {
        if ($windowWidth < desktopBreakPoint && isNotAboutUsPage) {
            $('body').append(footerElement);
        }
        if ($windowWidth >= desktopBreakPoint && isNotAboutUsPage) {
            $('.page-background').append(footerElement);
            //            console.log("MOBILE / TABLET")
        }
    }).resize();


    //====================================================
    //PICK UP POINTS JSON API
    //====================================================

	function compareByProvinceDe( a, b ) {
	  if ( a.locationDe < b.locationDe ){
		return -1;
	  }
	  if ( a.locationDe > b.locationDe ){
		return 1;
	  }
	  return 0;
	}

	function compareByProvinceIt( a, b ) {
	  if ( a.locationIt < b.locationIt ){
		return -1;
	  }
	  if ( a.locationIt > b.locationIt ){
		return 1;
	  }
	  return 0;
	}

    //REUSABLE FUNCTION THAT FORMATS THE PICKUP POINTS JSON DATA
    function pickUpPointsJSON(lang) {
        // Open a new connection, using the GET request on the URL endpoint
        request.open('GET', 'https://frox.shop/api/v8/pickuppoints/active', true)

        var isActive,
            i = 0;

        if (lang === "it") {
            var provinceArray = ['Tutte'];
        }
        if (lang === "de") {
            var provinceArray = ['Alle'];
        }

        var provIndex = 1;

        $('#provinceSelector').change(function () {
            provIndex = 1;
        }).change();

        request.onload = function PickUpPointsAPI() {
            // Begin accessing JSON data here
            var data = JSON.parse(this.response)

			if (lang === "it") {
				data.sort(compareByProvinceIt);
			}
			if (lang === "de") {
				data.sort(compareByProvinceDe);
			}
			
            if (request.status >= 200 && request.status < 400) {
                data.forEach((pickUpPoint) => {

                    //LOAD OBJECTS
                    var $pickUpPointsWrapper = $('#pickUpPointsWrapper'),
                        $pickUpPointsTabletCol,
                        $pickUpPointsDesktopCol,
                        $chevronIcon = $('<img src="../img/icons/chevron_icon.svg" alt="">'),
                        $locationIcon = $('<img src="../img/icons/location-icon.svg" alt="">'),

                        //LOAD ENDPOINT TEXT
                        $germanCityText = pickUpPoint.locationDe,
                        $italianCityText = pickUpPoint.locationIt,

                        provinceNameDe = pickUpPoint['province']['nameDe'],
                        provinceNameIt = pickUpPoint['province']['nameIt'],

                        $germanTitleText = pickUpPoint.nameDe,
                        $italianTitleText = pickUpPoint.nameIt,

                        $germanMapLinkText = pickUpPoint.addressDe + ", " + pickUpPoint.zip + ", " + pickUpPoint.cityDe,
                        $italianMapLinkText = pickUpPoint.addressIt + ", " + pickUpPoint.zip + ", " + pickUpPoint.cityIt,

                        $germanMapLinkPlainText = pickUpPoint.addressDe + ", " + pickUpPoint.zip + " " + pickUpPoint.cityDe + ", " + provinceNameDe,
                        $italianMapLinkPlainText = pickUpPoint.addressIt + ", " + pickUpPoint.zip + " " + pickUpPoint.cityIt + ", " + provinceNameIt,

                        $germanTimesText = pickUpPoint.pickupTimesDe,
                        $italianTimesText = pickUpPoint.pickupTimesIt,

                        $germanLocationNotesText = pickUpPoint.notesDe,
                        $italianLocationNotesText = pickUpPoint.notesIt;



                    //FUNCTION WHICH ALLOWS FOR DYNAMIC LANGUAGE CHANGING
                    function chooseVariable(variable) {
                        if (lang == "de") {
                            if (variable == "city") {
                                return $germanCityText
                            }
                            if (variable == "title") {
                                return $germanTitleText
                            }
                            if (variable == "mapLink") {
                                return $germanMapLinkText
                            }
                            if (variable == "PlainMapLink") {
                                return $germanMapLinkPlainText
                            }
                            if (variable == "times") {
                                return $germanTimesText
                            }
                            if (variable == "notes") {
                                return $germanLocationNotesText
                            }
                            if (variable == 'province') {
                                return provinceNameDe;
                            }
                            if (variable == 'notes') {
                                return $germanLocationNotesText
                            }
                        }
                        if (lang == "it") {
                            if (variable == "city") {
                                return $italianCityText
                            }
                            if (variable == "title") {
                                return $italianTitleText
                            }
                            if (variable == "mapLink") {
                                return $italianMapLinkText
                            }
                            if (variable == "PlainMapLink") {
                                return $italianMapLinkPlainText
                            }
                            if (variable == "times") {
                                return $italianTimesText
                            }
                            if (variable == "notes") {
                                return $italianLocationNotesText
                            }
                            if (variable == 'province') {
                                return provinceNameIt;
                            }
                            if (variable == 'notes') {
                                return $italianLocationNotesText
                            }
                        }
                    }

                    //CREATE HTML ELEMENTS
                    var $cityElement = $('<h4>' + chooseVariable("city") + '</h4>'),
                        $mapLinkDiv = $('<div class="map-link"><a href="https://www.google.com/maps/place/' + chooseVariable("PlainMapLink") + '" target="_blank">' + chooseVariable("mapLink") + '<img src="../img/icons/open_icon.svg" alt=""></a></div>'),
                        $timesDiv = $('<div class="pick-up-times"><img src="../img/icons/time_icon.svg" alt=""><p class="p-light"> ' + chooseVariable("times") + '</p> </div>'),
                        $notesDiv = $('<div><p class="p-light"><em>' + chooseVariable("notes") + '</em></p></div>');

					if (lang === "de") {
                        var $nameElement = $('<p class="p-light">' + $germanTitleText + '</h5>');						
					}
					if (lang === "it") {
                        var $nameElement = $('<p class="p-light">' + $italianTitleText + '</h5>');
					}


                    //LOOK FOR NOTES
                    //IF AVALABLE CREATE HTML ELEMENT
                    //IF NULL IGNORE
                    if (chooseVariable('notes') == null || chooseVariable('notes') === "") {
                        var $hidableDetailsDiv = $('<div class="hidable-details light-card"></div>').append($mapLinkDiv, $timesDiv);
                    } else {
                        var $hidableDetailsDiv = $('<div class="hidable-details light-card"></div>').append($mapLinkDiv, $notesDiv, $timesDiv);
                    }

                    //ADDS PROVINCE NAME TO SELECTOR ARRAY
                    if (lang === "it") {
                        if (provinceArray.indexOf(provinceNameIt) === -1) {
                            provinceArray.push(provinceNameIt);
                        }
                    }
                    if (lang === "de") {
                        if (provinceArray.indexOf(provinceNameDe) === -1) {
                            provinceArray.push(provinceNameDe);
                        }
                    }


                    //CONSTRUCT DOM
                    var $locationTitle = $('<div class="location-title"></div>').append($cityElement, $nameElement),
                        $pickUpPointsCardDiv = $('<div class="pick-up-point-card ultra-light-card"></div>').append($locationIcon, $locationTitle, $chevronIcon),
                        $pickUpPointsCardWrapper = $('<div class="pick-up-point-card-wrapper ' + chooseVariable('province') + '"></div>').append($pickUpPointsCardDiv, $hidableDetailsDiv);





                    var provinceSelectorVal;

                    //FUNCTION TRIGGERED BY CHANGING PROVINCE FILTER
                    $('#provinceSelector').change(function () {
                        provinceSelectorVal = $(this).val();

                        //DISPLAYS OR HIDES ITEMS DEPENDING ON WHAT OPTION IS SELETED
                        if ($(this).val() === "Alle" || $(this).val() === null || $(this).val() === "Tutte") {
                            $('.pick-up-point-card-wrapper').css({
                                'display': 'block'
                            });
                        } else {
                            $('.pick-up-point-card-wrapper:not(.' + $(this).val() + ')').css({
                                'display': 'none'
                            });
                            $('.pick-up-point-card-wrapper.' + $(this).val()).css({
                                'display': 'block'
                            });
                        }

                        //WHEN PLACEING FILTERED ITEMS IT REORDERS THEM INTO COLUMNS
                        if ($(this).val() === provinceNameIt || $(this).val() === provinceNameDe || $(this).val() === "Alle" || $(this).val() === "Tutte") {
                            provIndex++;
                            if (isEven(provIndex)) {
                                $pickUpPointsTabletCol = $('.pick-up-point-column-1');
                            } else {
                                $pickUpPointsTabletCol = $('.pick-up-point-column-2');
                            }

                            if (divisibleByThree(provIndex - 1) == "first") {
                                $pickUpPointsDesktopCol = $('.pick-up-point-column-1');
                            }
                            if (divisibleByThree(provIndex - 1) == "second") {
                                $pickUpPointsDesktopCol = $('.pick-up-point-column-2');
                            }
                            if (divisibleByThree(provIndex - 1) == "third") {
                                $pickUpPointsDesktopCol = $('.pick-up-point-column-3');
                            }

                            //ASSEMBLE FINAL FILTERED ELEMENTS AND UPDATED ON WINDOW RESIZE
                            $(window).resize(function () {
                                if ($windowWidth < tabletBreakPoint) {
                                    $pickUpPointsWrapper.append($pickUpPointsCardWrapper);
                                }
                                if ($windowWidth >= tabletBreakPoint) {
                                    $pickUpPointsTabletCol.append($pickUpPointsCardWrapper);
                                }
                                if ($windowWidth >= lrgDesktopBreakpoint) {
                                    $pickUpPointsDesktopCol.append($pickUpPointsCardWrapper);
                                }
                            }).resize();
                        }



                    }).change();

                    console.log(provinceSelectorVal);

                    //PLACES ALL ELEMENTS IN ORDINARY COLUMNS IF NO FILTER HAS BEEN SELECTED
                    if (provinceSelectorVal === null || provinceSelectorVal === "Alle" || $(this).val() === "Tutte") {

                        if (isEven(i)) {
                            $pickUpPointsTabletCol = $('.pick-up-point-column-1');
                        } else {
                            $pickUpPointsTabletCol = $('.pick-up-point-column-2');
                        }

                        if (divisibleByThree(i + 1) == "first") {
                            $pickUpPointsDesktopCol = $('.pick-up-point-column-1');
                        }
                        if (divisibleByThree(i + 1) == "second") {
                            $pickUpPointsDesktopCol = $('.pick-up-point-column-2');
                        }
                        if (divisibleByThree(i + 1) == "third") {
                            $pickUpPointsDesktopCol = $('.pick-up-point-column-3');
                        }

                        //ASSEMBLE FINAL ELEMENTS
                        $(window).resize(function () {
                            if ($windowWidth < tabletBreakPoint) {
                                $pickUpPointsWrapper.append($pickUpPointsCardWrapper);
                            }
                            if ($windowWidth >= tabletBreakPoint) {
                                $pickUpPointsTabletCol.append($pickUpPointsCardWrapper);
                            }
                            if ($windowWidth >= lrgDesktopBreakpoint) {
                                $pickUpPointsDesktopCol.append($pickUpPointsCardWrapper);
                                //                            console.log(provinceSelectorVal);

                            }
                        }).resize();
                    }
                    i++;
                })


            } else {
                console.log('error')
            }

            //APPENDS DYNAMIC PROVINCE ARRAY TO PROVINCE SELECT INPUT
            provinceArray.forEach((obj) => {

                $('#pickUpPoints_de').find('#provinceSelector').append('<option value="' + obj + '" id="' + 'province_' + obj + '">' + obj + '</option>');
                $('#pickUpPoints_it').find('#provinceSelector').append('<option value="' + obj + '" id="' + 'province_' + obj + '">' + obj + '</option>');


            })

        }




        // Send request
        request.send()
    }

    //CLEARS COLOUMNS EACH TIME A NEW FILTER IS CHOSEN
    $('#provinceSelector').change(function () {
        $('.pick-up-point-column-1').empty();
        $('.pick-up-point-column-2').empty();
        $('.pick-up-point-column-3').empty();
    }).change();

    if ($('body').is('#pickUpPoints_de')) {
        pickUpPointsJSON('de');
    }
    if ($('body').is('#pickUpPoints_it')) {
        pickUpPointsJSON('it');
    }

    $(document.body).on('click', '.pick-up-point-card', function () {
        $(this).parent().toggleClass('open');

    });


    //====================================================
    //INDEX BLOG JSON API
    //====================================================

    //REUSABLE FUNCTION THAT FORMATS THE BLOGPOST JSON DATA
    // -- THEN RETRIEVES AND THE MOST RECENT BLOG POST
    function mostRecentBlogPostForIndex(lang) {

        function chooseURL() {
            if (lang == "de") {
                return 0;
            }
            if (lang == "it") {
                return 1;
            }
        }

        request.open('GET', 'https://frox.shop/api/v8/blogposts/' + chooseURL() + '/publishedonwebsite', true)

        request.onload = function () {
            // Begin accessing JSON data here
            var data = JSON.parse(this.response);

            var dates = data.map(function (x) {
                return new Date(x.date);
            })

            var latest = new Date(Math.max.apply(null, dates));
            var earliest = new Date(Math.min.apply(null, dates));
            var amountSameDatePosts = 0;


            if (request.status >= 200 && request.status < 400) {

                data.forEach((blogPost) => {


                    const d = new Date(blogPost.date);
                    const ye = new Intl.DateTimeFormat(lang, {
                        year: 'numeric'
                    }).format(d);
                    const mo = new Intl.DateTimeFormat(lang, {
                        month: 'long'
                    }).format(d);
                    const da = new Intl.DateTimeFormat(lang, {
                        day: '2-digit'
                    }).format(d);

                    function chooseReadMoreText() {
                        if (lang === "it"){
                            return "Leggi tutto"
                        }
                        if (lang === "de"){
                            return "weiterlesen"
                        }
                        }

                    var indexBlogPostWrapper = $('#blogPostCard'),
                        formattedDateText = (`${da} ${mo} ${ye}`),
                        blogTitleText = blogPost.title,
                        blogAuthorText = 'Frox',
                        blogReformattedSnippit = blogPost.body.replace('<p>', '').replace('</p>', '').replace('<b>', '').replace('</b>', ''),
                        blogSnippitText = blogReformattedSnippit.substring(0, 100) + "...",
                        blogImageLink = 'https://frox.shop/media/blog/' + blogPost.pictureUrl,
                        blogPostId = blogPost.id,


                        blogFormattedDate = $('<p class="p-detail">' + formattedDateText + '</p>'),
                        blogTitle = $('<h2>' + blogTitleText + '</h2>'),
                        blogAuthor = $('<p class="p-detail">' + blogAuthorText + '</p>'),
                        blogSnippit = $('<p class="p-dark">' + blogSnippitText + '</p>'),



                        blogReadMoreDiv = $('<div class="read-more"><p class="p-detail">' + chooseReadMoreText() + '</p><img src="" alt=""></div>'),
                        blogDetailsWrapper = $('<div class="blog-preview-details"></div>').append(blogFormattedDate, blogTitle, blogAuthor, blogSnippit, blogReadMoreDiv);

                    var dBool = d.getHours() + "" + d.getMinutes() + "" + d.getDate() + "" + d.getMonth() + "" + d.getFullYear(),
                        latestBool = latest.getHours() + "" + latest.getMinutes() + "" + latest.getDate() + "" + latest.getMonth() + "" + latest.getFullYear();
                    //                    console.log(dBool, latestBool);

                    if (dBool === latestBool) {

                        amountSameDatePosts++;
                        //                        console.log(amountSameDatePosts);
                        if (amountSameDatePosts == 1) {

                            function blogImageFinder() {
                                if (blogImageLink != null) {
                                    var blogImage = $('<img class="blog-preview-image" src="' + blogImageLink + '" alt="">'),
                                        blogPreviewImage = $('<div style="border-radius: 8px;"><img class="blog-preview-image" src="' + blogImageLink + '" alt=""></div>');
                                    return blogPreviewImage;
                                }
                            }
                            //                            console.log(blogImageLink);

                            var blogDetailsWrapper = $('<div class="blog-preview-details"></div>').append(blogImageFinder(), blogFormattedDate, blogTitle, blogAuthor, blogSnippit, blogReadMoreDiv);
                            indexBlogPostWrapper.append(blogDetailsWrapper);

                            $(document.body).on('click', '#blogPostCard', function () {

                                if ($('html').attr('lang') == 'de') {
                                    window.open("../de/der-frox-blog.html?blogPost=" + blogPostId, "_self");
                                }
                                if ($('html').attr('lang') == 'it') {
                                    window.open("../it/il-blog-frox.html?blogPost=" + blogPostId, "_self");
                                }
                            });

                        }
                    }





                })

            } else {
                console.log('error')
            }
        }
        // Send request
        request.send()
    }


    if ($('body').is('#index_de')) {
        mostRecentBlogPostForIndex('de');
    }
    if ($('body').is('#index_it')) {
        mostRecentBlogPostForIndex('it');
    }


    //====================================================
    //BLOGPAGE JSON API
    //====================================================

    //REUSABLE FUNCTION THAT FORMATS THE BLOGPOST JSON DATA
    function blogPageJSON(lang) {
        function chooseURL() {
            if (lang == "de") {
                return 0;
            }
            if (lang == "it") {
                return 1;
            }
        }

        request.open('GET', 'https://frox.shop/api/v8/blogposts/' + chooseURL() + '/publishedonwebsite', true)
        request.onload = function () {
            // Begin accessing JSON data here
            var data = JSON.parse(this.response),
                i = 1;


            if (request.status >= 200 && request.status < 400) {



                data.forEach((blogPost) => {

                    const d = new Date(blogPost.date);
                    const ye = new Intl.DateTimeFormat(lang, {
                        year: 'numeric'
                    }).format(d);
                    const mo = new Intl.DateTimeFormat(lang, {
                        month: 'long'
                    }).format(d);
                    const da = new Intl.DateTimeFormat(lang, {
                        day: '2-digit'
                    }).format(d);

                    var blogPostCardWrapper = $('#blogPostCardWrapper'),
                        blogPostTabletCol,
                        blogPostDesktopCol,
                        blogPostId = blogPost.id,
                        formattedDateText = (`${da} ${mo} ${ye}`),
                        blogTitleText = blogPost.title,
                        blogAuthorText = 'Frox',
                        blogReformattedSnippit = blogPost.body.replace('<p>', '').replace('</p>', '').replace('<b>', '').replace('</b>', ''),
                        blogSnippitText = blogReformattedSnippit.substring(0, 100) + "...",
                        blogImageLink = 'https://frox.shop/media/blog/' + blogPost.pictureUrl,

                        blogPreviewImage = $('<div style="border-radius: 8px; overflow: hidden;"><img class="blog-preview-image" src="' + blogImageLink + '" alt=""></div>');

                    //CHECK FOR BLOG IMG
                    //  ADD IMAGE TO DIV
                    function blogImageFinder() {
                        if (blogImageLink != null) {
                            return blogPreviewImage;
                        }
                    }
                    //  ADD CLASS TO CARD
                    function imgClassAdder() {
                        if (blogImageLink != null) {
                            return "blog-img-card";
                        } else {
                            return "blog-card"
                        }
                    }

                    function chooseReadMoreText() {
                        if (lang === "it"){
                            return "Leggi tutto"
                        }
                        if (lang === "de"){
                            return "weiterlesen"
                        }
                    }

                    var blogFormattedDate = $('<p class="p-detail">' + formattedDateText + '</p>'),
                        blogPostCard = $('<div class="blog-post-card light-card ' + imgClassAdder() + '" id="' + blogPostId + '"></div>'),
                        blogTitle = $('<h3>' + blogTitleText + '</h3>'),
                        blogAuthor = $('<p class="p-detail">' + blogAuthorText + '</p>'),
                        blogSnippit = $('<p class="p-dark">' + blogSnippitText + '</p>'),

                        blogReadMoreDiv = $('<div class="read-more"><p class="p-detail">' + chooseReadMoreText() + '</p><img src="" alt=""></div>'),
                        blogDetailsWrapper = $('<div class="blog-preview-details"></div>').append((blogImageFinder()), blogFormattedDate, blogTitle, blogAuthor, blogSnippit, blogReadMoreDiv);


                    if (isEven(i - 1)) {
                        blogPostTabletCol = $('.blog-post-column-1');
                    } else {
                        blogPostTabletCol = $('.blog-post-column-2');

                    }

                    if (divisibleByThree(i) == "first") {
                        blogPostDesktopCol = $('.blog-post-column-1');
                    }
                    if (divisibleByThree(i) == "second") {
                        blogPostDesktopCol = $('.blog-post-column-2');
                    }
                    if (divisibleByThree(i) == "third") {
                        blogPostDesktopCol = $('.blog-post-column-3');
                    }

                    //ASSEMBLE FINAL ELEMENTS
                    blogPostCard.append(blogDetailsWrapper);

                    $(window).resize(function () {
                        if ($windowWidth < tabletBreakPoint) {
                            blogPostCardWrapper.append(blogPostCard);
                        }
                        if ($windowWidth >= tabletBreakPoint) {
                            blogPostTabletCol.append(blogPostCard);
                        }
                        if ($windowWidth >= lrgDesktopBreakpoint) {
                            blogPostDesktopCol.append(blogPostCard);
                        }
                    }).resize();

                    // VARIABLES DEFINING APPENDED INDEX ON URL
                    var urlString = window.location.href,
                        urlBlogIndex = urlString.substr(urlString.indexOf("?") + 1),
                        urlBlogIndexNumber = parseInt(urlBlogIndex.substr(urlBlogIndex.indexOf("=") + 1));

                    //IF THERE IS AN APPENDED URL OPEN THE BLOG POST
                    $(document.body).ready(function () {
                    if (urlBlogIndexNumber != null && urlBlogIndexNumber == blogPostId) {
                        window.scrollTo(0, 0);
                        $('.blog-wrapper').addClass("open-article");
                        $('#blogPostDate').append(formattedDateText);
                        $('#blogPostTitle').append(blogTitleText);
                        $('#blogPostAuthor').append(blogAuthorText);
                        $('.blog-post-body').append(blogPost.body);
                        $('.blog-template-background').append(footerElement);

                        $(window).resize(function () {
                            if ($windowWidth < desktopBreakPoint) {
                                $('#blogPostTemplate').append(footerElement);
                            }
                            if ($windowWidth >= desktopBreakPoint) {
                                $('.blog-template-background').append(footerElement);
                            }
                        }).resize();

                        if (blogImageLink != null) {
                            $('#blogPostImage').attr('src', blogImageLink);
                        }


                        var $postHeight = $('#blogPostTemplate').outerHeight();

                        $('#blogPostTemplate').css({
                            'display': 'block',
                        });

                        $('#blog-slider').css({
                            'height': $postHeight,
                            'overflow': 'hidden'
                        });
                        $('#blog_de').css({
                            'height': $postHeight
                        });
                    }
                    });

                        


                    

                    //OPENING THE SELECTED BLOGPOST
                    $(document.body).on('click', '.blog-post-card', function () {

                        var clickedID = $(this).attr('id');
                        window.scrollTo(0, 0);
                        //                        console.log(clickedID);
                        $('.blog-wrapper').addClass("open-article");
                        if (blogPostId == clickedID) {
                            $('#blogPostDate').append(formattedDateText);
                            $('#blogPostTitle').append(blogTitleText);
                            $('#blogPostAuthor').append(blogAuthorText);
                            $('.blog-post-body').append(blogPost.body);

                            $(window).resize(function () {
                                if ($windowWidth < desktopBreakPoint) {
                                    $('#blogPostTemplate').append(footerElement);
                                }
                                if ($windowWidth >= desktopBreakPoint) {
                                    $('.blog-template-background').append(footerElement);
                                }
                            }).resize();


                            if (blogImageLink != null) {
                                $('#blogPostImage').attr('src', blogImageLink);
                            }
                            var $postHeight = $('#blogPostTemplate').outerHeight();

                            $('#blogPostTemplate').css({
                                'display': 'block',
                            });

                            $('#blog-slider').css({
                                'height': $postHeight,
                                'overflow': 'hidden'
                            });
                            $('#blog_de').css({
                                'height': $postHeight
                            });

                        }
                    });

                    i++;


                })

            } else {
                console.log('error')
            }
        }
        // Send request
        request.send()
    }

    if ($('body').is('#blog_de')) {
        blogPageJSON('de');
    }
    if ($('body').is('#blog_it')) {
        blogPageJSON('it');
    }

    //SETTING GLOBAL VARIABLE
    var currentScrollPos;

    //CLICK FUNCTION THAT UPDATES THE SCROLL POSITION WHEN BLOGPOST IS CLICKED
    $(document.body).on('click', '.blog-post-card', function () {
        currentScrollPos = $(document).scrollTop();
        //        console.log(currentScrollPos);
        return currentScrollPos;
    });


    //CLICK FUNCTION THAT MOVES PAGE TO BLOG POST
    $('#backToBlogButton').click(function () {
        var urlSearch = window.location.search;
        if (urlSearch !== "") {
            location.search = "";
        }
        window.scrollTo(0, 0);
        $('.blog-wrapper').removeClass("open-article");
        $('#blog-slider').css({
            'height': 'initial',
            'overflow-y': 'initial'
        });
        $('#blog_de').css({
            'height': 'initial'
        });
        $(document).scrollTop(currentScrollPos);

         $(window).resize(function () {
        if ($windowWidth < desktopBreakPoint && isNotAboutUsPage) {
            $('body').append(footerElement);
        }
        if ($windowWidth >= desktopBreakPoint && isNotAboutUsPage) {
            $('.page-background').append(footerElement);
            //            console.log("MOBILE / TABLET")
        }
    }).resize();



    });

    //DELAYED CLICK FUNCTION THAT CLEARS THE BLOGPOST TEMPLATE
    $('#backToBlogButton').click(function () {
        setTimeout(function () {
            $('#blogPostDate').html("");
            $('#blogPostTitle').html("");
            $('#blogPostAuthor').html("");
            $('.blog-post-body').html("");
            $('#blogPostTemplate').css({
                'display': 'none'
            });
            $('#blogPostImage').attr('src', "")



        }, 400)
    });


    //====================================================
    //DELIVERY JSON API
    //====================================================

    //REUSABLE FUNCTION THAT FORMATS THE DELIVERY JSON DATA
    function deliveryJSON(lang) {

        request.open('GET', 'https://frox.shop/api/v8/couriers/active', true)
        var index = 0,
            groupedIndex = 1,
            nonGroupedIndex = 1;
        request.onload = function () {
            // Begin accessing JSON data here
            var data = JSON.parse(this.response),
                provIndex = 1;

            if (lang === "it") {
                var provinceArray = ['Tutte'];
            }

            if (lang === "de") {
                var provinceArray = ['Alle'];
            }


            if (request.status >= 200 && request.status < 400) {

                data.forEach((delivery) => {

                    var z = 0;

                    delivery.courierZones.forEach((zone) => {

                        function addZero(i) {
                            if (i < 10) {
                                i = "0" + i;
                            }
                            return i;
                        }



                        var deliveryWrapper = $('#deliveryWrapper'),
                            deliveryTabletCol,
                            deliveryDesktopCol,
                            deliveryName = delivery.name,
                            cityNameDe = zone.cityDe,
                            cityNameIt = zone.cityIt,
                            cityZip = zone.zip,
                            provinceDe = zone.province.nameDe,
                            provinceIt = zone.province.nameIt,
                            timeArrayLength = zone.courierDeliveryTimes.length,
                            price = (zone.price).toFixed(2) + "\u20AC",
                            freeDeliveryPrice = (zone.freeHomeDeliveryTreshhold)?.toFixed(2) + "\u20AC",
                            formattedPricesDe = "<p class=\"p-detail\">Lieferpreise</p><p class=\"p-dark\"><strong>" + price + "</strong> - Unabhängig von der Anzahl Boxen<br>";
                            if(zone.freeHomeDeliveryTreshhold != null) {
                                formattedPricesDe += "Kostenlose Lieferung ab einem Gesamtbetrag von <strong>" + freeDeliveryPrice + "</strong></p>";
                            }
                            else {
                                formattedPricesDe += "</p>";
                            }
                            formattedTimeElementDe = $('<div></div>').append($('<p class="p-detail">Lieferzeiten</p>')),
                            formattedPricesIt = "<p class=\"p-detail\">Prezzo di consegna</p><p class=\"p-dark\"><strong>" + price + "</strong> - indipendentemente dalla quantità di box<br>";
                            if (zone.freeHomeDeliveryTreshhold != null){
                                formattedPricesIt += "Consegna gratuita a partire da una spesa complessiva di <strong>" + freeDeliveryPrice + "</strong></p>";
                            }
                            else {
                                formattedPricesIt += "</p>";
                            }
                            formattedTimeElementIt = $('<div></div>').append($('<p class="p-detail">Tempi di consegna</p>')),
                            weekdaysDe = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
                            weekdaysIt = ["Lunedi", "Martedi", "Mercoledi", "Giovedi", "Venerdì", "Sabato", "Domenica"];


                        function chooseVariable(variable) {
                            if (lang == 'de') {
                                if (variable == 'cityName') {
                                    return provinceDe
                                }
                                if (variable == 'province') {
                                    return cityNameDe
                                }
                                if (variable == 'weekdays') {
                                    return weekdaysDe
                                }
                                if (variable == 'prices') {
                                    return formattedPricesDe
                                }
                                if (variable == 'time') {
                                    return formattedTimeElementDe
                                }
                                if (variable == 'mapLink') {
                                    return mapLinkDe
                                }
                                if (variable == 'provinceArea') {
                                    return provinceDe;
                                }
                            }
                            if (lang == 'it') {
                                if (variable == 'cityName') {
                                    return provinceIt
                                }
                                if (variable == 'province') {
                                    return cityNameIt
                                }
                                if (variable == 'weekdays') {
                                    return weekdaysIt
                                }
                                if (variable == 'prices') {
                                    return formattedPricesIt
                                }
                                if (variable == 'time') {
                                    return formattedTimeElementIt
                                }
                                if (variable == 'mapLink') {
                                    return mapLinkIt
                                }
                                if (variable == 'provinceArea') {
                                    return provinceIt;
                                }
                            }
                        }

                        console.log(chooseVariable('provinceArea') + " / " + provinceIt + " / " + provinceDe)

                        //CHECK IF A DELIVERY IS ECO
                        function checkForEco() {
                            if (cityNameDe.search("Öko") > 0) {
                                var ecoClass = 'eco';
                                return ecoClass;
                            } else {
                                var ecoClass = '';
                                return ecoClass;
                            }
                        }

                        function chooseSVG() {
                            if (cityNameDe.search("Öko") > 0) {
                                return bicycleIcon;
                            } else {
                                return deliveryIcon;
                            }
                        }

                        var cityElement = ('<h3>' + chooseVariable('province') + '</h3>'),
                            provinceElement = ('<p class="p-detail delivery-location">' + chooseVariable('cityName') + " // " + cityZip + '</p>'),
                            zipElement = ('<p class="p-detail"> ZIP CODE: ' + cityZip + '</p>'),
                            chevronElement = (chevronIcon),
                            titleElement = ('<div>' + provinceElement + cityElement + '</div>'),
                            visibleSectionDiv = $('<div class="title-element"></div>').append((chooseSVG()), titleElement, chevronElement),
                            hidableSectionDiv = $('<div class="hidable-section"></div>'),
                            cardDiv = $('<div class="light-card"></div>').append(visibleSectionDiv, hidableSectionDiv),
                            mapLinkDe = "https://www.google.de/maps/place/" + cityZip + "+" + chooseVariable('cityName'),
                            mapLinkIt = "https://www.google.it/maps/place/" + cityZip + "+" + chooseVariable('cityName'),
                            mapLinkButton = $('<a target="_blank" href="' + chooseVariable('mapLink') + '"><div class="light-card map-link-button">  ' + goToIcon + '</div></a>'),
                            flexCardWrapper = $('<div class="delivery-flex-wrapper ' + chooseVariable('provinceArea') + ' ' + checkForEco() + '"></div>').append(cardDiv, mapLinkButton);

                        //ADDS PROVINCE NAME TO SELECTOR ARRAY
                        if (lang === "it") {
                            if (provinceArray.indexOf(provinceIt) === -1) {
                                provinceArray.push(provinceIt);
                            }
                        }
                        if (lang === "de") {
                            if (provinceArray.indexOf(provinceDe) === -1) {
                                provinceArray.push(provinceDe);
                            }
                        }

                        //                        console.log(provinceArray);

                        //FOR EACH DELIVERY TIME REFORMAT
                        for (i = 0; i < timeArrayLength; i++) {
                            var weekday = zone.courierDeliveryTimes[i].weekday - 1,
                                formattedWeekDay = chooseVariable('weekdays')[weekday],
                                timeStartTime = new Date(zone.courierDeliveryTimes[i].startTime),
                                formattedStartTime = addZero(timeStartTime.getHours()) + ":" + addZero(timeStartTime.getMinutes()),
                                timeEndTime = new Date(zone.courierDeliveryTimes[i].endTime),
                                formattedEndTime = addZero(timeEndTime.getHours()) + ":" + addZero(timeEndTime.getMinutes()),
                                formattedDeliveryTimes = formattedWeekDay + ", " + timeStartTime + " - " + timeEndTime

                            chooseVariable('time').append($('<p class="p-light">' + formattedWeekDay + ", " + formattedStartTime + " - " + formattedEndTime + '</p>'));
                            hidableSectionDiv.append(chooseVariable('time'));
                        }


                        //APPEND PRICES
                        hidableSectionDiv.append(chooseVariable('prices'));


                        var provinceSelectorVal;

                        //FUNCTION TRIGGERED BY CHANGING PROVINCE FILTER
                        $('#provinceSelector').change(function () {
                            provinceSelectorVal = $(this).val();

                            //DISPLAYS OR HIDES ITEMS DEPENDING ON WHAT OPTION IS SELETED
                            if ($(this).val() === "Alle" || $(this).val() === null || $(this).val() === "Tutte") {
                                $('.delivery-flex-wrapper').css({
                                    'display': 'flex'
                                });
                            } else {
                                $('.delivery-flex-wrapper:not(.' + $(this).val() + ')').css({
                                    'display': 'none'
                                });
                                $('.delivery-flex-wrapper.' + $(this).val()).css({
                                    'display': 'flex'
                                });
                            }

                            //WHEN PLACEING FILTERED ITEMS IT REORDERS THEM INTO COLUMNS
                            if ($(this).val() === provinceIt || $(this).val() === provinceDe || $(this).val() === "Alle" || $(this).val() === "Tutte") {
                                provIndex++;
                                if (isEven(provIndex)) {
                                    deliveryTabletCol = $('.delivery-column-1');
                                } else {
                                    deliveryTabletCol = $('.delivery-column-2');
                                }

                                if (divisibleByThree(provIndex - 1) == "first") {
                                    deliveryDesktopCol = $('.delivery-column-1');
                                }
                                if (divisibleByThree(provIndex - 1) == "second") {
                                    deliveryDesktopCol = $('.delivery-column-2');
                                }
                                if (divisibleByThree(provIndex - 1) == "third") {
                                    deliveryDesktopCol = $('.delivery-column-3');
                                }

                                //ASSEMBLE FINAL FILTERED ELEMENTS AND UPDATED ON WINDOW RESIZE
                                $(window).resize(function () {
                                    if ($windowWidth < tabletBreakPoint) {
                                        deliveryWrapper.append(flexCardWrapper);
                                    }
                                    if ($windowWidth >= tabletBreakPoint) {
                                        deliveryTabletCol.append(flexCardWrapper);
                                    }
                                    if ($windowWidth >= lrgDesktopBreakpoint) {
                                        deliveryDesktopCol.append(flexCardWrapper);
                                    }
                                }).resize();
                            }

                        }).change();


                        //PLACES ALL ELEMENTS IN ORDINARY COLUMNS IF NO FILTER HAS BEEN SELECTED
                        if (provinceSelectorVal === null || provinceSelectorVal === "Alle" || $(this).val() === "Tutte") {
                            //                            console.log("SHOW ALL")
                            //                            console.log(index)

                            if (isEven(index)) {
                                deliveryTabletCol = $('.delivery-column-1');
                            } else {
                                deliveryTabletCol = $('.delivery-column-2');
                            }

                            if (divisibleByThree(index) == "first") {
                                deliveryDesktopCol = $('.delivery-column-1');
                            }
                            if (divisibleByThree(index) == "second") {
                                deliveryDesktopCol = $('.delivery-column-2');
                            }
                            if (divisibleByThree(index) == "third") {
                                deliveryDesktopCol = $('.delivery-column-3');
                            }

                            //ASSEMBLE FINAL ELEMENTS
                            $(window).resize(function () {
                                if ($windowWidth < tabletBreakPoint) {
                                    deliveryWrapper.append(flexCardWrapper);
                                }
                                if ($windowWidth >= tabletBreakPoint) {
                                    deliveryTabletCol.append(flexCardWrapper);
                                }
                                if ($windowWidth >= lrgDesktopBreakpoint) {
                                    deliveryDesktopCol.append(flexCardWrapper);
                                    //                            console.log(provinceSelectorVal);

                                }
                            }).resize();
                        }
                        index++;
                        nonGroupedIndex++;
                        z++;
                    })

                })

            } else {
                console.log('error')
            }

            //APPENDS DYNAMIC PROVINCE ARRAY TO PROVINCE SELECT INPUT
            provinceArray.forEach((obj) => {

                $('#delivery_de').find('#provinceSelector').append('<option value="' + obj + '" id="' + 'province_' + obj + '">' + obj + '</option>');
                $('#delivery_it').find('#provinceSelector').append('<option value="' + obj + '" id="' + 'province_' + obj + '">' + obj + '</option>');
                console.log(obj);
            })
        }


        // Send request
        request.send()
    }

    //CLEARS COLOUMNS EACH TIME A NEW FILTER IS CHOSEN
    $('#provinceSelector').change(function () {
        $('.pick-up-point-column-1').empty();
        $('.pick-up-point-column-2').empty();
        $('.pick-up-point-column-3').empty();
    }).change();

    if ($('body').is('#delivery_de')) {
        deliveryJSON('de');
    }
    if ($('body').is('#delivery_it')) {
        deliveryJSON('it');
    }

    //CLICK FUNCTION THAT OPENS STANDARD DELIVERY POINTS
    $(document.body).on('click', '.title-element', function () {
        $(this).parent().toggleClass('open-delivery-card');

    });

    //CLICK FUNCTION THAT OPENS GROUPED DELIVERY POINTS
    $(document.body).on('click', '.city-group-div', function () {
        $(this).parent().find('.zip-wrapper-div').toggleClass('opened');
        $(this).parent().find('.empty-card').toggleClass('opened');
        $(this).toggleClass('opened');
        $(this).parent().toggleClass('opened');

        if ($('.empty-card').hasClass("opened")) {
            $(this).parent().find('.empty-card:nth-child(2)').css({
                'top': $('.city-group-div').outerHeight() + 6 + "px"
            });
            $(this).parent().find('.empty-card:nth-child(3)').css({
                'top': $('.city-group-div').outerHeight() * 2 + 12 + "px"
            });
        } else {
            $(this).parent().find('.empty-card:nth-child(2)').css({
                'top': '6px'
            });
            $(this).parent().find('.empty-card:nth-child(3)').css({
                'top': '12px'
            });
        }



    });



    //====================================================
    //INDEX SCROLL TO FUNCTION
    //====================================================

    if ($('body').is('#index_de') || $('body').is('#index_it')) {

        var $welcomeButton = $('#scrollToWelcomeButton'),
            $heroButton = $('#scrollToHeroVideo'),
            $withFroxButton = $('#scrollToWithFroxButton'),
            $boxesButton = $('#scrollToBoxesButton'),
            $howItWorksButton = $('#scrollToHowItWorksButton'),
            $benefitsButton = $('#scrollToBenefitsButton'),
            $FAQButton = $('#scrollToFAQButton'),
            $blogButton = $('#scrollToBlogButton'),
            $headerHeight = $('header').outerHeight(),


            $welcomeOffset,
            $heroVideoOffset,
            $mobileHeroVideoOffset,
            $withFroxOffset,
            $boxesOffset,
            $howItWorksOffset,
            $benefitsOffset,
            $FAQOffset,
            $blogOffset,
            $scrollMarker = $('.index-navigation .scroll-marker'),
            $scrollSubtraction = $(window).height() / 2;

        var urlString = window.location.href,
            urlSectionName = window.location.hash;

        console.log(urlSectionName);


        $(window).resize(function () {
            $welcomeOffset = $('.index-header').offset().top - $headerHeight;
            $withFroxOffset = $('.section-wrapper:nth-child(1)').offset().top - $headerHeight - 50;
            $boxesOffset = $('.section-wrapper:nth-child(2)').offset().top - $headerHeight;
            $howItWorksOffset = $('.section-wrapper:nth-child(3)').offset().top - $headerHeight;
            $benefitsOffset = $('.section-wrapper:nth-child(4)').offset().top - $headerHeight;
            $FAQOffset = $('.section-wrapper:nth-child(5)').offset().top - $headerHeight;
            $blogOffset = $('.section-wrapper:nth-child(6)').offset().top - $headerHeight;

        }).resize()


        function addCurrentClass(currentSection) {
            $('.index-navigation .current-section').removeClass('current-section');
            currentSection.addClass('current-section');
        }

        $(window).scroll(function () {

            var $liHeight = $('.index-navigation li').height(),
                $wrapperPadding = parseInt($('.index-navigation').css('padding-top').replace(/[^-\d\.]/g, ''), 10);

            $scrollMarker.css({
                'height': $liHeight
            });


            if ($(window).scrollTop() === 0) {
                $scrollMarker.css({
                    'top': $wrapperPadding
                });

            } else if ($(window).scrollTop() < $withFroxOffset - $scrollSubtraction) {
                $scrollMarker.css({
                    'top': $wrapperPadding + $liHeight + 'px'
                });
                addCurrentClass($welcomeButton)
            } else if ($(window).scrollTop() < $boxesOffset - $scrollSubtraction) {
                $scrollMarker.css({
                    'top': $wrapperPadding + ($liHeight * 1) + 'px'
                });
                addCurrentClass($withFroxButton);
            } else if ($(window).scrollTop() < $howItWorksOffset - $scrollSubtraction) {
                $scrollMarker.css({
                    'top': $wrapperPadding + ($liHeight * 2) + 'px'
                });
                addCurrentClass($boxesButton);
            } else if ($(window).scrollTop() < $benefitsOffset - $scrollSubtraction) {
                $scrollMarker.css({
                    'top': $wrapperPadding + ($liHeight * 3) + 'px'
                });
                addCurrentClass($howItWorksButton);
            } else if ($(window).scrollTop() < $FAQOffset - $scrollSubtraction) {
                $scrollMarker.css({
                    'top': $wrapperPadding + ($liHeight * 4) + 'px'
                });
                addCurrentClass($benefitsButton);
            } else if ($(window).scrollTop() < $blogOffset - $scrollSubtraction) {
                $scrollMarker.css({
                    'top': $wrapperPadding + ($liHeight * 5) + 'px'
                });
                addCurrentClass($FAQButton);
            } else {
                $scrollMarker.css({
                    'top': $wrapperPadding + ($liHeight * 6) + 'px'
                });
                addCurrentClass($blogButton);
            }
        }).scroll();

        $welcomeButton.click(function () {
            $("html, body").animate({
                scrollTop: $welcomeOffset + "px"
            }, 700, "swing");
        });
        $('.index-down-chevron').click(function () {
            $("html, body").animate({
                scrollTop: $withFroxOffset + "px"
            }, 700, "swing");
        });
        $withFroxButton.click(function () {
            $("html, body").animate({
                scrollTop: $withFroxOffset + "px"
            }, 700, "swing");
        });
        $boxesButton.click(function () {
            $("html, body").animate({
                scrollTop: $boxesOffset + "px"
            }, 700, "swing");
        });
        $('#scrollToOurBoxes').click(function () {
            $("html, body").animate({
                scrollTop: $boxesOffset + "px"
            }, 700, "swing");
        });
        $howItWorksButton.click(function () {
            $("html, body").animate({
                scrollTop: $howItWorksOffset + "px"
            }, 700, "swing");
        });
        $benefitsButton.click(function () {
            $("html, body").animate({
                scrollTop: $benefitsOffset + "px"
            }, 700, "swing");
        });
        $FAQButton.click(function () {
            $("html, body").animate({
                scrollTop: $FAQOffset + "px"
            }, 700, "swing");
        });
        if (urlSectionName === "#FAQ") {
            $(document).ready(function () {
                $("html, body").animate({
                    scrollTop: $FAQOffset + "px"
                }, 1200, "swing");
            });
        }
        $blogButton.click(function () {
            $("html, body").animate({
                scrollTop: $blogOffset + "px"
            }, 700, "swing");
        });

        location.hash = ""
    }




    //====================================================
    //HERO VIDEO
    //====================================================

    //HERO VIDEO & IMG SCROLLING ANIMATION
    if ($('body').is('#index_de') || $('body').is('#index_it')) {

        var isHeroVideo = $('.desktop-hero-video').length > 0 || $('.mobile-hero-video').length > 0;


        $(window).scroll(function () {
            var $scrollPosition = $(window).scrollTop(),
                $heroVideoHeight = $(window).height(),
                $headerHeight = $('header').outerHeight(),
                $pageBackgroundOffset = $('.index-page-background').offset().top / 2,
                scrolledToBackground = $pageBackgroundOffset <= $scrollPosition,
                $percentScrolledOfHeroVideo = ($scrollPosition / $heroVideoHeight),
                $heroVideoOpacity = 1 - $percentScrolledOfHeroVideo,
                $heroVideoBorderRadius = ($percentScrolledOfHeroVideo * 100);

            if (isHeroVideo) {
                if (scrolledToBackground) {
                    $('.desktop-hero-video').get(0).pause();
                    $('.mobile-hero-video').get(0).pause();
                    $('.desktop-hero-video').addClass('unfocused');

                } else {
                    $('.desktop-hero-video').get(0).play();
                    $('.mobile-hero-video').get(0).play();
                    $('.desktop-hero-video').removeClass('unfocused');
                }
            } else {
                if (scrolledToBackground) {
                    $('.desktop-hero-img').addClass('unfocused');

                } else {
                    $('.desktop-hero-img').removeClass('unfocused');
                }
            }

        }).scroll();



    }

    //====================================================
    //CONTACT CARDS
    //====================================================

    var rotateIndex = 0;

    $('.flip-card-button').click(function () {
        rotateIndex++;
        var rotateAmount = -180 * rotateIndex + "deg";

        $(this).parent().find('.flip-card').toggleClass('flipped');
        $(this).find('svg').css({
            'transform': 'rotate(' + rotateAmount + ')'
        });

        $(this).toggleClass('greyed-button');

    });
});
