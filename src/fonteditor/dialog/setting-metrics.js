/**
 * @file setting-name.js
 * @author mengke01
 * @date
 * @description
 * 设置字体上标，下标信息
 */

define(
    function (require) {

        var program = require('../widget/program');
        var weightClass = require('ttf/enum/weightClass');
        var widthClass = require('ttf/enum/widthClass');
        var panose = [
            'bFamilyType', 'bSerifStyle', 'bWeight', 'bProportion', 'bContrast',
            'bStrokeVariation', 'bArmStyle', 'bLetterform', 'bMidline', 'bXHeight'
        ];

        var tpl = ''
            + '<div class="form-inline">'
            +   '<div class="form-group">'
            +       '<div class="input-group input-group-sm">'
            +         '<span class="input-group-addon">上升</span>'
            +         '<input data-field="ascent" type="number" class="form-control">'
            +       '</div>'
            +   '</div>'
            +   '<div class="form-group">'
            +       '<div class="input-group input-group-sm">'
            +         '<span class="input-group-addon">下降</span>'
            +         '<input data-field="descent" type="number" class="form-control">'
            +       '</div>'
            +   '</div>'
            +   '<div class="form-group">'
            +       '<div class="input-group input-group-sm">'
            +         '<span class="input-group-addon">行间距</span>'
            +         '<input data-field="lineGap" type="number" class="form-control">'
            +       '</div>'
            +   '</div>'
            + '</div>'
            + '<div class="form-inline">'
            +   '<div class="form-group">'
            +       '<div class="input-group input-group-sm">'
            +         '<span class="input-group-addon">win上升</span>'
            +         '<input data-field="usWinAscent" type="number" class="form-control">'
            +       '</div>'
            +   '</div>'
            +   '<div class="form-group">'
            +       '<div class="input-group input-group-sm">'
            +         '<span class="input-group-addon">win下降</span>'
            +         '<input data-field="usWinDescent" type="number" class="form-control">'
            +       '</div>'
            +   '</div>'
            +   '<a href="#" id="setting-calc-metrics" class="form-group">计算</a>'
            + '</div>'
            + '<div class="form-inline">'
            +   '<div class="form-group">'
            +       '<div class="input-group input-group-sm">'
            +         '<span class="input-group-addon">typo上升</span>'
            +         '<input data-field="sTypoAscender" type="number" class="form-control">'
            +       '</div>'
            +   '</div>'
            +   '<div class="form-group">'
            +       '<div class="input-group input-group-sm">'
            +         '<span class="input-group-addon">typo下降</span>'
            +         '<input data-field="sTypoDescender" type="number" class="form-control">'
            +       '</div>'
            +   '</div>'
            +   '<div class="form-group">'
            +       '<div class="input-group input-group-sm">'
            +         '<span class="input-group-addon">typo间距</span>'
            +         '<input data-field="sTypoLineGap" type="number" class="form-control">'
            +       '</div>'
            +   '</div>'
            + '</div>'
            + '<div class="form-inline">'
            +   '<div class="form-group">'
            +       '<div class="input-group input-group-sm">'
            +         '<span class="input-group-addon">x高度</span>'
            +         '<input data-field="sxHeight" type="number" class="form-control">'
            +       '</div>'
            +   '</div>'
            +   '<div class="form-group">'
            +       '<div class="input-group input-group-sm">'
            +         '<span class="input-group-addon">大写H高度</span>'
            +         '<input data-field="sCapHeight" type="number" class="form-control">'
            +       '</div>'
            +   '</div>'
            + '</div>'
            + '<hr>'
            + '<div class="form-inline">'
            +   '<div class="form-group">'
            +       '<div class="input-group input-group-sm">'
            +         '<span class="input-group-addon">删除线位置</span>'
            +         '<input data-field="yStrikeoutPosition" type="number" class="form-control">'
            +       '</div>'
            +   '</div>'
            +   '<div class="form-group">'
            +       '<div class="input-group input-group-sm">'
            +         '<span class="input-group-addon">删除线厚度</span>'
            +         '<input data-field="yStrikeoutSize" type="number" class="form-control">'
            +       '</div>'
            +   '</div>'
            + '</div>'
            + '<div class="form-inline">'
            +   '<div class="form-group">'
            +       '<div class="input-group input-group-sm">'
            +         '<span class="input-group-addon">下划线位置</span>'
            +         '<input data-field="underlinePosition" type="number" class="form-control">'
            +       '</div>'
            +   '</div>'
            +   '<div class="form-group">'
            +       '<div class="input-group input-group-sm">'
            +         '<span class="input-group-addon">下划线厚度</span>'
            +         '<input data-field="underlineThickness" type="number" class="form-control">'
            +       '</div>'
            +   '</div>'
            + '</div>'
            + '<hr>'
            + '<div class="form-inline">'
            +   '<div class="form-group">'
            +       '<div class="input-group input-group-sm">'
            +         '<span class="input-group-addon">下标水平</span>'
            +         '<input data-field="ySubscriptXSize" type="number" class="form-control">'
            +       '</div>'
            +   '</div>'
            +   '<div class="form-group">'
            +       '<div class="input-group input-group-sm">'
            +         '<span class="input-group-addon">下标垂直</span>'
            +         '<input data-field="ySubscriptYSize" type="number" class="form-control">'
            +       '</div>'
            +   '</div>'
            + '</div>'
            + '<div class="form-inline">'
            +   '<div class="form-group">'
            +       '<div class="input-group input-group-sm">'
            +         '<span class="input-group-addon">下标X偏移</span>'
            +         '<input data-field="ySubscriptXOffset" type="number" class="form-control">'
            +       '</div>'
            +   '</div>'
            +   '<div class="form-group">'
            +       '<div class="input-group input-group-sm">'
            +         '<span class="input-group-addon">下标Y偏移</span>'
            +         '<input data-field="ySubscriptYOffset" type="number" class="form-control">'
            +       '</div>'
            +   '</div>'
            + '</div>'
            + '<div class="form-inline">'
            +   '<div class="form-group">'
            +       '<div class="input-group input-group-sm">'
            +         '<span class="input-group-addon">上标水平</span>'
            +         '<input data-field="ySuperscriptXSize" type="number" class="form-control">'
            +       '</div>'
            +   '</div>'
            +   '<div class="form-group">'
            +       '<div class="input-group input-group-sm">'
            +         '<span class="input-group-addon">上标垂直</span>'
            +         '<input data-field="ySuperscriptYSize" type="number" class="form-control">'
            +       '</div>'
            +   '</div>'
            + '</div>'
            + '<div class="form-inline">'
            +   '<div class="form-group">'
            +       '<div class="input-group input-group-sm">'
            +         '<span class="input-group-addon">上标X偏移</span>'
            +         '<input data-field="ySuperscriptXOffset" type="number" class="form-control">'
            +       '</div>'
            +   '</div>'
            +   '<div class="form-group">'
            +       '<div class="input-group input-group-sm">'
            +         '<span class="input-group-addon">上标Y偏移</span>'
            +         '<input data-field="ySuperscriptYOffset" type="number" class="form-control">'
            +       '</div>'
            +   '</div>'
            + '</div>'
            + '<hr>'
            + '<div class="form-inline">'
            +   '<div class="form-group">'
            +       '<div class="input-group input-group-sm">'
            +         '<span class="input-group-addon">供应商ID</span>'
            +         '<input data-field="achVendID" type="text" class="form-control">'
            +       '</div>'
            +   '</div>'

            +   '<div class="form-group">'
            +       '<div class="input-group input-group-sm">'
            +         '<span class="input-group-addon">粗细</span>'
            +         '<select id="setting-weight" data-field="usWeightClass"'
            +           ' data-type="number" class="form-control"></select>'
            +       '</div>'
            +   '</div>'
            +   '<div class="form-group">'
            +       '<div class="input-group input-group-sm">'
            +         '<span class="input-group-addon">宽度</span>'
            +         '<select id="setting-width" data-field="usWidthClass"'
            +           ' data-type="number" class="form-control"></select>'
            +       '</div>'
            +   '</div>'
            + '</div>'
            + '<div class="input-group input-group-sm">'
            +     '<span class="input-group-addon">panose</span>'
            +     '<input data-field="panose" type="text" class="form-control">'
            + '</div>';

        return require('./setting').derive({

            title: '字体度量',

            getTpl: function () {
                return tpl;
            },

            set: function (setting) {

                // width and weight
                var html = '';

                Object.keys(weightClass).forEach(function (key) {
                    html += '<option value="' + key + '">' + weightClass[key] + '</option>';
                });

                $('#setting-weight').html(html);

                html = '';
                Object.keys(widthClass).forEach(function (key) {
                    html += '<option value="' + key + '">' + widthClass[key] + '</option>';
                });
                $('#setting-width').html(html);

                setting.panose = panose.map(function (name) {
                    return setting[name];
                }).join('-');

                this.setFields(setting);

                var me = this;
                $('#setting-calc-metrics').on('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var metrics = program.ttfManager.calcMetrics();
                    me.setFields(metrics);
                });
            },

            validate: function () {
                $('#setting-calc-metrics').off('click');
                var setting = this.getFields();
                var length = panose.length;
                (setting.panose || '').split('-').forEach(function (val, i) {
                    if (i < length) {
                        setting[panose[i]] = (+val || 0) & 0xF;
                    }
                });

                return setting;
            }
        });
    }
);
