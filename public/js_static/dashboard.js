
// Dashboard.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - ThemeOn.net -


$(window).on('load', function() {

    $('#demo-chosen-select').chosen();

    $(".demo_select2").select2({
        minimumResultsForSearch: Infinity
    });



    // Network chart ( Morris Line Chart )
    // =================================================================
    // Require MorrisJS Chart
    // -----------------------------------------------------------------
    // http://morrisjs.github.io/morris.js/
    // =================================================================

    var day_data = [
        {"elapsed": "Oct-12", "value": 24, b:2},
        {"elapsed": "Oct-13", "value": 34, b:22},
        {"elapsed": "Oct-14", "value": 33, b:7},
        {"elapsed": "Oct-15", "value": 22, b:6},
        {"elapsed": "Oct-16", "value": 28, b:17},
        {"elapsed": "Oct-17", "value": 60, b:15},
        {"elapsed": "Oct-18", "value": 60, b:17},
        {"elapsed": "Oct-19", "value": 70, b:7},
        {"elapsed": "Oct-20", "value": 67, b:18},
        {"elapsed": "Oct-21", "value": 86, b: 18},
        {"elapsed": "Oct-22", "value": 86, b: 18},
        {"elapsed": "Oct-23", "value": 113, b: 29},
        {"elapsed": "Oct-24", "value": 130, b: 23},
        {"elapsed": "Oct-25", "value": 114, b:10},
        {"elapsed": "Oct-26", "value": 80, b:22},
        {"elapsed": "Oct-27", "value": 109, b:7},
        {"elapsed": "Oct-28", "value": 100, b:6},
        {"elapsed": "Oct-29", "value": 105, b:17},
        {"elapsed": "Oct-30", "value": 110, b:15},
        {"elapsed": "Oct-31", "value": 102, b:17},
        {"elapsed": "Nov-01", "value": 107, b:7},
        {"elapsed": "Nov-02", "value": 60, b:18},
        {"elapsed": "Nov-03", "value": 67, b: 18},
        {"elapsed": "Nov-04", "value": 76, b: 18},
        {"elapsed": "Nov-05", "value": 73, b: 29},
        {"elapsed": "Nov-06", "value": 94, b: 13},
        {"elapsed": "Nov-07", "value": 135, b:2},
        {"elapsed": "Nov-08", "value": 154, b:22},
        {"elapsed": "Nov-09", "value": 120, b:7},
        {"elapsed": "Nov-10", "value": 100, b:6},
        {"elapsed": "Nov-11", "value": 130, b:17},
        {"elapsed": "Nov-12", "value": 100, b:15},
        {"elapsed": "Nov-13", "value": 60, b:17},
        {"elapsed": "Nov-14", "value": 70, b:7},
        {"elapsed": "Nov-15", "value": 67, b:18},
        {"elapsed": "Nov-16", "value": 86, b: 18},
        {"elapsed": "Nov-17", "value": 86, b: 18},
        {"elapsed": "Nov-18", "value": 113, b: 29},
        {"elapsed": "Nov-19", "value": 130, b: 23},
        {"elapsed": "Nov-20", "value": 114, b:10},
        {"elapsed": "Nov-21", "value": 80, b:22},
        {"elapsed": "Nov-22", "value": 109, b:7},
        {"elapsed": "Nov-23", "value": 100, b:6},
        {"elapsed": "Nov-24", "value": 105, b:17},
        {"elapsed": "Nov-25", "value": 110, b:15},
        {"elapsed": "Nov-26", "value": 102, b:17},
        {"elapsed": "Nov-27", "value": 107, b:7},
        {"elapsed": "Nov-28", "value": 60, b:18},
        {"elapsed": "Nov-29", "value": 67, b: 18},
        {"elapsed": "Nov-30", "value": 76, b: 18},
        {"elapsed": "Des-01", "value": 73, b: 29},
        {"elapsed": "Des-02", "value": 94, b: 13},
        {"elapsed": "Des-03", "value": 79, b: 24}
    ];

    // var chart = Morris.Area({
    //     element : 'morris-chart-network',
    //     data: day_data,
    //     axes:false,
    //     xkey: 'elapsed',
    //     ykeys: ['value', 'b'],
    //     labels: ['Download Speed', 'Upload Speed'],
    //     yLabelFormat :function (y) { return y.toString() + ' Mb/s'; },
    //     gridEnabled: false,
    //     gridLineColor: 'transparent',
    //     lineColors: ['#82c4f8','#0d92fc'],
    //     lineWidth:[0,0],
    //     pointSize:[0,0],
    //     fillOpacity: 1,
    //     gridTextColor:'#999',
    //     parseTime: false,
    //     resize:true,
    //     behaveLikeLine : true,
    //     hideHover: 'auto'
    // });





    // HDD USAGE - SPARKLINE LINE AREA CHART
    // =================================================================
    // Require sparkline
    // -----------------------------------------------------------------
    // http://omnipotent.net/jquery.sparkline/#s-about
    // =================================================================
    var hddSparkline = function() {
        $("#demo-sparkline-area").sparkline([57,69,70,62,73,79,76,77,73,52,57,50,60,55,70,68], {
            type: 'line',
            width: '100%',
            height: '40',
            spotRadius: 5,
            lineWidth: 1.5,
            lineColor:'rgba(255,255,255,.85)',
            fillColor: 'rgba(0,0,0,0.03)',
            spotColor: 'rgba(255,255,255,.5)',
            minSpotColor: 'rgba(255,255,255,.5)',
            maxSpotColor: 'rgba(255,255,255,.5)',
            highlightLineColor : '#ffffff',
            highlightSpotColor: '#ffffff',
            tooltipChartTitle: 'Usage',
            tooltipSuffix:' %'

        });
    }




    // EARNING - SPARKLINE LINE CHART
    // =================================================================
    // Require sparkline
    // -----------------------------------------------------------------
    // http://omnipotent.net/jquery.sparkline/#s-about
    // =================================================================
    var earningSparkline = function(){
        $("#demo-sparkline-line").sparkline([345,404,305,455,378,567,586,685,458,742,565], {
            type: 'line',
            width: '100%',
            height: '40',
            spotRadius: 4,
            lineWidth:1,
            lineColor:'#ffffff',
            fillColor: false,
            minSpotColor :false,
            maxSpotColor : false,
            highlightLineColor : '#ffffff',
            highlightSpotColor: '#ffffff',
            tooltipChartTitle: 'Earning',
            tooltipPrefix :'$ ',
            spotColor:'#ffffff',
            valueSpots : {
                '0:': '#ffffff'
            }
        });
    }



    // SALES - SPARKLINE BAR CHART
    // =================================================================
    // Require sparkline
    // -----------------------------------------------------------------
    // http://omnipotent.net/jquery.sparkline/#s-about
    // =================================================================

    var barEl = $("#demo-sparkline-bar");
    var barValues = [40,32,65,53,62,55,24,67,45,70,45,56,34,67,76,32,65,53,62,55,24,67,45,70,45,56,70,45,56,34,67,76,32,65,53,62,55];
    var barValueCount = barValues.length;
    var barSpacing = 1;
    var salesSparkline = function(){
         barEl.sparkline(barValues, {
            type: 'bar',
            height: 55,
            barWidth: Math.round((barEl.parent().width() - ( barValueCount - 1 ) * barSpacing ) / barValueCount),
            barSpacing: barSpacing,
            zeroAxis: false,
            tooltipChartTitle: 'Daily Sales',
            tooltipSuffix: ' Sales',
            barColor: 'rgba(255,255,255,.7)'
        });
    }


    $(window).on('resizeEnd', function(){
        hddSparkline();
        earningSparkline();
        salesSparkline();
    })
    hddSparkline();
    earningSparkline();
    salesSparkline();

    $('.input-phone').mask('99 9 9999.9999');
    $('.input-cpf').mask('000.000.000-00');
    $('.input-date').mask('00/00/0000');
    $('.input-cep').mask('00000-000');
    $('.only-number').keyup(function () {
        this.value = this.value.replace(/[^0-9\.]/g,'');
    });

    $(".input-money").each(function(){
        $(this).maskMoney({
            prefix:'',
            allowNegative: false,
            thousands:'.',
            decimal:',',
            affixesStay: false
        });
    });





    // PANEL OVERLAY
    // =================================================================
    // Require Nifty js
    // -----------------------------------------------------------------
    // http://www.themeon.net
    // =================================================================
    $('#demo-panel-network-refresh').niftyOverlay().on('click', function(){
        var $el = $(this), relTime;

        $el.niftyOverlay('show');


        relTime = setInterval(function(){
            $el.niftyOverlay('hide');
            clearInterval(relTime);
        },2000);
    });


    $('.list-partners-site-item').on('click', function(){

        $this = $(this);
        $thisBank = $(this).attr('data-bank');

        if( $(this).find('input').is(':checked') ) {

            $(this).siblings('.list-partners-site-item').removeClass('active');

            $(this).addClass('active');
        }

        if($('.list-banks-site').length) {
            $('.box-add-partner-wrapper').show();

            $('.detail-bank').not($($thisBank)).hide();
            $('.box-add-partner').not($($thisBank)).hide();

            $($thisBank).fadeIn();
        }
    });

    // $('.list-banks-site .list-partners-site-item').on('click', function(){

    //     $this = $(this);
    //     $thisBank = $(this).attr('data-bank');

    //     $('.detail-bank').hide();
    //     $('.box-add-partner').hide();

    //     $($thisBank).fadeIn(200);
    // });

    if( $('#historyBuy').length ) {

        $.fn.DataTable.ext.pager.numbers_length = 5;

        $('#historyBuy').dataTable( {
            "responsive": true,
            "language": {
                "paginate": {
                  "previous": '<i class="demo-psi-arrow-left"></i>',
                  "next": '<i class="demo-psi-arrow-right"></i>'
                },
                "emptyTable":     "Nenhum resultado encontrado.",
                "info":           "Mostrando _START_ a _END_ de _TOTAL_ resultados",
                "infoEmpty":      "Mostrando 0 resultados",
                "infoFiltered":   "(filtrado de _MAX_ resultados)",
                "lengthMenu":     "Mostrando _MENU_ p/ página",
                "loadingRecords": "Carregando...",
                "processing":     "Carregando...",
                "search":         "Buscar:",
                "zeroRecords":    "Nenhum resultado encontrado",
            },
        } );

        $('#historySell').dataTable( {
            "responsive": true,
            "language": {
                "paginate": {
                  "previous": '<i class="demo-psi-arrow-left"></i>',
                  "next": '<i class="demo-psi-arrow-right"></i>'
                },
                "emptyTable":     "Nenhum resultado encontrado.",
                "info":           "Mostrando _START_ a _END_ de _TOTAL_ resultados",
                "infoEmpty":      "Mostrando 0 resultados",
                "infoFiltered":   "(filtrado de _MAX_ resultados)",
                "lengthMenu":     "Mostrando _MENU_ p/ página",
                "loadingRecords": "Carregando...",
                "processing":     "Carregando...",
                "search":         "Buscar:",
                "zeroRecords":    "Nenhum resultado encontrado",
            },
        } );
    }

    var $gridIsotope = $('.grid_filter').isotope({
        // itemSelector: '.element-item',
        layoutMode: 'fitRows',
    });

    $gridIsotope.imagesLoaded().progress( function() {
        $gridIsotope.isotope('layout');
    });

    $('.filter-partners-categs .label').on( 'click', function() {
        var filterValue = $(this).attr('data-filter');
        $gridIsotope.isotope({ filter: filterValue });
        $('.filter-partners-categs .label').removeClass('active');
        $(this).addClass('active');
    });







    // WELCOME NOTIFICATIONS
    // =================================================================
    // Require Admin Core Javascript
    // =================================================================
    $.niftyNoty({
        type: 'dark',
        title: 'Bem Vindo, Fulano Silva',
        message: 'Nesse painel você poderá adminstrar <br>suas compras e vendas na Royal Sport.',
        container: 'floating',
        timer: 8000
    });


    Dropzone.options.demoDropzone = { // The camelized version of the ID of the form element
        // The configuration we've talked about above
        autoProcessQueue: false,
        uploadMultiple: true,
        //parallelUploads: 25,
        maxFiles: 5,

        // The setting up of the dropzone
        init: function() {
        var myDropzone = this;
        //  Here's the change from enyo's tutorial...
        //  $("#submit-all").click(function (e) {
        //  e.preventDefault();
        //  e.stopPropagation();
        //  myDropzone.processQueue();
            //
        //}
        //    );

        }

    }

});
