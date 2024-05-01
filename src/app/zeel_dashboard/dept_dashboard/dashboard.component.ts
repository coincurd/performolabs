import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NgIf, NgClass } from '@angular/common';
import { environment } from '../../environments/environment';
import { HttpService } from '../../services/http.service';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { trigger, transition, query, style, animate, group, stagger, state } from '@angular/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [RouterLink, NgIf, MatNativeDateModule, NgFor, MatCardModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatDatepickerModule, NgClass, MatTableModule, HttpClientModule, MatButtonModule, FormsModule],
    templateUrl: './testing.component.html',
    styleUrl: './dashboard.component.scss',
    animations: [
        trigger("listAnimation", [
            transition("* => *", [
                // each time the binding value changes
                query(
                    ":leave",
                    [stagger(100, [animate("1s", style({ opacity: 0 }))])],
                    { optional: true }
                ),
                query(
                    ":enter",
                    [
                        style({ opacity: 0 }),
                        stagger(100, [animate("1s", style({ opacity: 1 }))])
                    ],
                    { optional: true }
                )
            ])
        ]),
        trigger("enterAnimation", [
            transition(":enter", [
                style({ transform: "translateX(100%)", opacity: 0 }),
                animate(
                    "500ms",
                    style({
                        transform: "translateX(0)",
                        opacity: 1,
                        "overflow-x": "hidden"
                    })
                )
            ]),
            // transition(":leave", [
            //   style({ transform: "translateX(0)", opacity: 1 }),
            //   animate("500ms", style({ transform: "translateX(100%)", opacity: 0 }))
            // ])
        ]),
        trigger("slideIn", [
            state("*", style({ "overflow-y": "hidden" })),
            state("void", style({ "overflow-y": "hidden" })),
            transition("* => void", [
                style({ height: "*" }),
                animate(250, style({ height: 0 }))
            ]),
            transition("void => *", [
                style({ height: "0" }),
                animate(250, style({ height: "*" }))
            ])
        ]),

        trigger('slideInOut', [
            transition(':enter', [
                style({ transform: 'translateY(100%)', opacity: 0 }),
                animate('600ms ease-in', style({ transform: 'translateY(0%)', 'opacity': 1 }))
            ]),

            transition(':leave', [
                style({ transform: 'translateY(0%)', opacity: 1 }),
                animate('0ms ease-in', style({ transform: 'translateY(100%)', 'opacity': 0 }))
            ])
        ]),
        trigger('DataList', [
            transition(':enter', [
                style({ transform: 'translateX(100%)', opacity: 0 }),
                animate('600ms ease-in', style({ transform: 'translateX(0%)', 'opacity': 1 }))
            ]),

            transition(':leave', [
                style({ transform: 'translateY(0%)', opacity: 1 }),
                animate('0ms ease-in', style({ transform: 'translateY(100%)', 'opacity': 0 }))
            ])
        ])
    ]
})
export class ZeelDashboardComponent {
    /// CUTTING
    /// CUTTING

    CuttingDownTimeDatewiseColumns: string[] = ['s_no', 'date', 'today_downtime', 'tilldate_downtime', 'today_cost_loss', 'tilldate_cost_loss'];
    CuttingDownTimeDatewiseSource: MatTableDataSource<any>;

    CuttingDownTimeColumns: string[] = ['s_no', 'floor', 'line', 'today_downtime', 'tilldate_downtime', 'today_cost_loss', 'tilldate_cost_loss'];
    CuttingDownTimeDataSource: MatTableDataSource<any>;

    CuttingCostDatewiseColumns: string[] = ['s_no', 'date', 'day_qty', 'day_total_qty', 'day_revenue', 'total_revenue', 'day_expense', 'total_expense', 'day_pl', 'total_pl', 'planned_per_cost', 'act_per_cost'];
    CuttingCostDatewiseSource: MatTableDataSource<any>;

    CuttingCostColumns: string[] = ['s_no', 'style', 'day_qty', 'day_total_qty', 'day_revenue', 'total_revenue', 'day_expense', 'total_expense', 'day_pl', 'total_pl', 'planned_per_cost', 'act_per_cost', 'till_act_cost'];
    CuttingCostSource: MatTableDataSource<any>;


    /// CUTTING
    /// CUTTING


    //SEWING
    //SEWING

    SewingEffBuidlingColumns: string[] = ['s_no', 'building', 'man_power', 'tilldate_manpower', 'today_plan_target', 'tilldate_plan_target', 'today_actual', 'tilldate_actual', 'today_produced_mins', 'tilldate_produced_mins', 'today_available_mins', 'tilldate_available_mins', 'today_target_eff', 'tilldate_target_eff', 'today_actual_eff', 'tilldate_actual_eff', 'today_productivity', 'tilldate_productivity'];
    SewingEffBuidlingSource: MatTableDataSource<any>;

    SewingEffFloorColumns: string[] = ['s_no', 'floor', 'man_power', 'tilldate_manpower', 'today_plan_target', 'tilldate_plan_target', 'today_actual', 'tilldate_actual', 'today_produced_mins', 'tilldate_produced_mins', 'today_available_mins', 'tilldate_available_mins', 'today_target_eff', 'tilldate_target_eff', 'today_actual_eff', 'tilldate_actual_eff', 'today_productivity', 'tilldate_productivity'];
    SewingEffFoorSource: MatTableDataSource<any>;


    SewingEffLineColumns: string[] = ['s_no', 'line', 'style', 'run_days', 'sam', 'man_power', 'tilldate_manpower', 'today_plan_target', 'tilldate_plan_target', 'today_actual', 'tilldate_actual', 'today_produced_mins', 'tilldate_produced_mins', 'today_available_mins', 'tilldate_available_mins', 'today_target_eff', 'tilldate_target_eff', 'today_actual_eff', 'tilldate_actual_eff', 'today_productivity', 'tilldate_productivity'];
    SewingEffLineSource: MatTableDataSource<any>;

    // SewingCostColumns: string[] = ['s_no', 'style', 'planned_cost', 'for_date', 'till_date', 'diff', 'prod_days'];
    // SewingCostDataSource: MatTableDataSource<any>;


    SewingCostBuidlingColumns: string[] = ['s_no', 'building', 'day_qty', 'day_total_qty', 'day_revenue', 'total_revenue', 'day_expense', 'total_expense', 'day_pl', 'total_pl'];
    SewingCostBuidlingSource: MatTableDataSource<any>;

    SewingCostFloorColumns: string[] = ['s_no', 'floor', 'day_qty', 'day_total_qty', 'day_revenue', 'total_revenue', 'day_expense', 'total_expense', 'day_pl', 'total_pl'];
    SewingCostFloorSource: MatTableDataSource<any>;

    SewingCostLineColumns: string[] = ['s_no', 'line', 'style', 'day_qty', 'day_total_qty', 'day_revenue', 'total_revenue', 'day_expense', 'total_expense', 'day_pl', 'total_pl'];
    SewingCostLineSource: MatTableDataSource<any>;

    SewingDhuBuildingColumns: string[] = ['s_no', 'buidling', 'today_inspected_pcs', 'tilldate_inspected_pcs', 'today_pass_pcs', 'tilldate_pass_pcs', 'today_defect', 'tilldate_defect', 'today_dhu_perc', 'tilldate_dhu_perc'];
    SewingDhuBuildingSource: MatTableDataSource<any>;

    SewingDhuFloorColumns: string[] = ['s_no', 'floor', 'today_inspected_pcs', 'tilldate_inspected_pcs', 'today_pass_pcs', 'tilldate_pass_pcs', 'today_defect', 'tilldate_defect', 'today_dhu_perc', 'tilldate_dhu_perc'];
    SewingDhuFloorSource: MatTableDataSource<any>;

    SewingDhuLineColumns: string[] = ['s_no', 'line', 'today_inspected_pcs', 'tilldate_inspected_pcs', 'today_pass_pcs', 'tilldate_pass_pcs', 'today_defect', 'tilldate_defect', 'today_dhu_perc', 'tilldate_dhu_perc'];
    SewingDhuLineSource: MatTableDataSource<any>;

    SewingRejBuildingColumns: string[] = ['s_no', 'building', 'today_inspected_pcs', 'tilldate_inspected_pcs', 'today_pass_pcs', 'tilldate_pass_pcs', 'today_reject', 'tilldate_reject', 'today_rej_perc', 'tilldate_rej_perc'];
    SewingRejBuildingSource: MatTableDataSource<any>;

    SewingRejFloorColumns: string[] = ['s_no', 'floor', 'today_inspected_pcs', 'tilldate_inspected_pcs', 'today_pass_pcs', 'tilldate_pass_pcs', 'today_reject', 'tilldate_reject', 'today_rej_perc', 'tilldate_rej_perc'];
    SewingRejFloorSource: MatTableDataSource<any>;

    SewingRejLineColumns: string[] = ['s_no', 'line', 'today_inspected_pcs', 'tilldate_inspected_pcs', 'today_pass_pcs', 'tilldate_pass_pcs', 'today_reject', 'tilldate_reject', 'today_rej_perc', 'tilldate_rej_perc'];
    SewingRejLineSource: MatTableDataSource<any>;


    SewingMisPcsBuildingColumns: string[] = ['s_no', 'building', 'cutting_load_qty', 'packing_fg_qty', 'in_line_wip'];
    SewingMisPcsBuildingSource: MatTableDataSource<any>;

    SewingMisPcsFloorColumns: string[] = ['s_no', 'floor', 'cutting_load_qty', 'packing_fg_qty', 'in_line_wip'];
    SewingMisPcsFloorSource: MatTableDataSource<any>;


    SewingMisPcsLineColumns: string[] = ['s_no', 'line', 'cutting_load_qty', 'packing_fg_qty', 'in_line_wip'];
    SewingMisPcsLineSource: MatTableDataSource<any>;


    SewingMisPcsLotColumns: string[] = ['s_no', 'style_no', 'jro', 'lot', 'cutting_load_qty', 'packing_fg_qty', 'in_line_wip'];
    SewingMisPcsLotSource: MatTableDataSource<any>;

    //SEWING
    //SEWING


    //HR
    //HR


    HrAtrBuildingColumns: string[] = ['s_no', 'building', 'strength', 'tilldate_left', 'tilldate_atr'];
    HrAtrBuildingSource: MatTableDataSource<any>;

    HrAtrFloorColumns: string[] = ['s_no', 'floor', 'strength', 'tilldate_left', 'tilldate_atr'];
    HrAtrFloorSource: MatTableDataSource<any>;

    HrAtrLineColumns: string[] = ['s_no', 'line', 'strength', 'tilldate_left', 'tilldate_atr'];
    HrAtrLineSource: MatTableDataSource<any>;

    HrAbsentBuildingColumns: string[] = ['s_no', 'building', 'strength', 'present', 'absent', 'absent_perc', 'tilldate_absent_perc'];
    HrAbsentBuildingSource: MatTableDataSource<any>;

    HrAbsentFloorColumns: string[] = ['s_no', 'floor', 'strength', 'present', 'absent', 'absent_perc', 'tilldate_absent_perc'];
    HrAbsentFloorSource: MatTableDataSource<any>;

    HrAbsentLineColumns: string[] = ['s_no', 'line', 'strength', 'present', 'absent', 'absent_perc', 'tilldate_absent_perc'];
    HrAbsentLineSource: MatTableDataSource<any>;

    HrUnplannedBuildingColumns: string[] = ['s_no', 'building', 'strength', 'absent', 'planned', 'tilldate_planned_leaves', 'un_planned_leaves', 'tilldate_un_planned_leaves', 'planned_perc', 'tilldate_planned_perc', 'un_planned_perc', 'tilldate_un_planned_perc'];
    HrUnplannedBuildingSource: MatTableDataSource<any>;

    HrUnplannedFloorColumns: string[] = ['s_no', 'floor', 'strength', 'absent', 'planned', 'tilldate_planned_leaves', 'un_planned_leaves', 'tilldate_un_planned_leaves', 'planned_perc', 'tilldate_planned_perc', 'un_planned_perc', 'tilldate_un_planned_perc'];
    HrUnplannedFloorSource: MatTableDataSource<any>;

    HrUnplannedLineColumns: string[] = ['s_no', 'line', 'strength', 'absent', 'planned', 'tilldate_planned_leaves', 'un_planned_leaves', 'tilldate_un_planned_leaves', 'planned_perc', 'tilldate_planned_perc', 'un_planned_perc', 'tilldate_un_planned_perc'];
    HrUnplannedLineSource: MatTableDataSource<any>;

    HrMmrBuildingColumns: string[] = ['s_no', 'building', 'strength', 'present', 'machine', 'mmr'];
    HrMmrBuildingSource: MatTableDataSource<any>;

    HrMmrFloorColumns: string[] = ['s_no', 'floor', 'strength', 'present', 'machine', 'mmr'];
    HrMmrFloorSource: MatTableDataSource<any>;

    HrMmrLineColumns: string[] = ['s_no', 'line', 'strength', 'present', 'machine', 'mmr'];
    HrMmrLineSource: MatTableDataSource<any>;



    HrBudgetBuildingColumns: string[] = ['s_no', 'building', 'strength', 'present', 'sanction', 'sanction_diff'];
    HrBudgetBuildingSource: MatTableDataSource<any>;

    HrBudgetFloorColumns: string[] = ['s_no', 'floor', 'strength', 'present', 'sanction', 'sanction_diff'];
    HrBudgetFloorSource: MatTableDataSource<any>;

    HrBudgetLineColumns: string[] = ['s_no', 'line', 'strength', 'present', 'sanction', 'sanction_diff'];
    HrBudgetLineSource: MatTableDataSource<any>;

    HrBudgetCostBuildingColumns: string[] = ['s_no', 'building', 'strength', 'present', 'sanction_cost', 'sanction_cost_diff'];
    HrBudgetCostBuildingSource: MatTableDataSource<any>;

    HrBudgetCostFloorColumns: string[] = ['s_no', 'floor', 'strength', 'present', 'sanction_cost', 'sanction_cost_diff'];
    HrBudgetCostFloorSource: MatTableDataSource<any>;

    HrBudgetCostLineColumns: string[] = ['s_no', 'line', 'strength', 'present', 'sanction_cost', 'sanction_cost_diff'];
    HrBudgetCostLineSource: MatTableDataSource<any>;

    //HR
    //HR

    RecuttingColumns: string[] = ['s_no', 'style_no', 'today_cut', 'tilldate_cut', 'today_recut', 'tilldate_recut', 'today_recut_perc', 'tilldate_recut_perc', 'fabric_recut', 'cutting_recut', 'production_recut'];
    RecuttingDataSource: MatTableDataSource<any>;


    // QUALITY


    QualityRftBuildingColumns: string[] = ['s_no', 'buidling', 'today_inspected_pcs', 'tilldate_inspected_pcs', 'today_pass_pcs', 'tilldate_pass_pcs', 'today_rft_perc', 'tilldate_rft_perc'];
    QualityRftBuildingSource: MatTableDataSource<any>;

    QualityRftFloorColumns: string[] = ['s_no', 'floor', 'today_inspected_pcs', 'tilldate_inspected_pcs', 'today_pass_pcs', 'tilldate_pass_pcs', 'today_rft_perc', 'tilldate_rft_perc'];
    QualityRftFloorSource: MatTableDataSource<any>;

    QualityRftLineColumns: string[] = ['s_no', 'line', 'today_inspected_pcs', 'tilldate_inspected_pcs', 'today_pass_pcs', 'tilldate_pass_pcs', 'today_rft_perc', 'tilldate_rft_perc'];
    QualityRftLineSource: MatTableDataSource<any>;

    QualityCostDatewiseColumns: string[] = ['s_no', 'date', 'today_inspect', 'tilldate_inspect', 'today_exp', 'tilldate_exp', 'today_cost', 'tilldate_cost'];
    QualityCostDatewiseDataSource: MatTableDataSource<any>;

    QualityDownTimeDatewiseColumns: string[] = ['s_no', 'date', 'today_downtime', 'tilldate_downtime', 'today_cost_loss', 'tilldate_cost_loss'];
    QualityDownTimeDatewiseSource: MatTableDataSource<any>;

    QualityDownTimeColumns: string[] = ['s_no', 'floor', 'line', 'today_downtime', 'tilldate_downtime', 'today_cost_loss', 'tilldate_cost_loss'];
    QualityDownTimeDataSource: MatTableDataSource<any>;

    CuttingFabUtlz1Columns: string[] = ['s_no', 'style_no', 'fabric', 'fab_used', 'actual_cut', 'planned_cut', 'diff_qty', 'actual_avg_per_acutal_cons', 'planned_avg', 'diff', 'excess_saving', 'per_uom_cost', 'cost'];
    CuttingFabUtlz1DataSource: MatTableDataSource<any>;

    CuttingFabUtlz2Columns: string[] = ['s_no', 'jro', 'fab_used', 'actual_cut', 'planned_cut', 'diff_qty', 'actual_avg_per_acutal_cons', 'planned_avg', 'diff', 'excess_saving', 'per_uom_cost', 'cost'];
    CuttingFabUtlzData2Source: MatTableDataSource<any>;

    CuttingFabUtlz3Columns: string[] = ['s_no', 'lot', 'fab_used', 'actual_cut', 'planned_cut', 'diff_qty', 'actual_avg_per_acutal_cons', 'planned_avg', 'diff', 'excess_saving', 'per_uom_cost', 'cost'];
    CuttingFabUtlzData3Source: MatTableDataSource<any>;

    QualityDhuColumns: string[] = ['s_no', 'style_no', 'today_inspected_pcs', 'tilldate_inspected_pcs', 'today_pass_pcs', 'tilldate_pass_pcs', 'today_defect', 'tilldate_defect', 'today_dhu_perc', 'tilldate_dhu_perc'];
    QualityDhuDataSource: MatTableDataSource<any>;

    FabricCostColumns: string[] = ['s_no', 'style_no', 'fabric', 'unit', 'today_fab_issue', 'tilldate_fab_issue', 'today_exp', 'tilldate_exp', 'today_cost', 'tilldate_cost'];
    FabricCostDataSource: MatTableDataSource<any>;


    // finishing kpi
    // finishing kpi

    // FinishingWipColumns: string[] = ['s_no','line', 'style', 'jro',  'lot',  'packing_fg_qty','isshed_to_wh', 'finishing_wip'];
    // FinishingWipDataSource: MatTableDataSource<any>;


    FinishingWipBuildingColumns: string[] = ['s_no', 'building', 'packing_fg_qty', 'isshed_to_wh', 'finishing_wip'];
    FinishingWipBuildingSource: MatTableDataSource<any>;

    FinishingWipFloorColumns: string[] = ['s_no', 'floor', 'packing_fg_qty', 'isshed_to_wh', 'finishing_wip'];
    FinishingWipFloorSource: MatTableDataSource<any>;


    FinishingWipLineColumns: string[] = ['s_no', 'line', 'packing_fg_qty', 'isshed_to_wh', 'finishing_wip'];
    FinishingWipLineSource: MatTableDataSource<any>;


    FinishingWipLotColumns: string[] = ['s_no', 'style_no', 'jro', 'lot', 'packing_fg_qty', 'isshed_to_wh', 'finishing_wip'];
    FinishingWipLotSource: MatTableDataSource<any>;

    FinsingCsgBuidlingColumns: string[] = ['s_no', 'building', 'day_qty', 'day_total_qty', 'day_revenue', 'total_revenue', 'day_expense', 'total_expense', 'day_pl', 'total_pl'];
    FinsingCsgBuidlingSource: MatTableDataSource<any>;

    FinsingCsgFloorColumns: string[] = ['s_no', 'floor', 'order', 'style', 'day_qty', 'day_total_qty', 'day_revenue', 'total_revenue', 'day_expense', 'total_expense', 'day_pl', 'total_pl'];
    FinsingCsgFloorSource: MatTableDataSource<any>;


    // finishing kpi
    // finishing kpi



    // TRIMS
    // TRIMS

    TrimsDownTimeDatewiseColumns: string[] = ['s_no', 'date', 'today_downtime', 'tilldate_downtime', 'today_cost_loss', 'tilldate_cost_loss'];
    TrimsDownTimeDatewiseSource: MatTableDataSource<any>;

    TrimsDownTimeColumns: string[] = ['s_no', 'floor', 'line', 'today_downtime', 'tilldate_downtime', 'today_cost_loss', 'tilldate_cost_loss'];
    TrimsDownTimeDataSource: MatTableDataSource<any>;


    TrimsUnusedColumns: string[] = ['s_no', 'group', 'qty', 'amount'];
    TrimsUnusedSource: MatTableDataSource<any>;

    TrimsUnusedColumns2: string[] = ['s_no', 'item_name', 'qty', 'amount'];
    TrimsUnusedSource2: MatTableDataSource<any>;


    // TRIMS
    // TRIMS

    // MAINTENANCE
    // MAINTENANCE

    MntDownTimeDatewiseColumns: string[] = ['s_no', 'date', 'today_downtime', 'tilldate_downtime', 'today_cost_loss', 'tilldate_cost_loss'];
    MntDownTimeDatewiseSource: MatTableDataSource<any>;

    MntDownTimeColumns: string[] = ['s_no', 'floor', 'line', 'today_downtime', 'tilldate_downtime', 'today_cost_loss', 'tilldate_cost_loss'];
    MntDownTimeDataSource: MatTableDataSource<any>;

    // MAINTENANCE
    // MAINTENANCE

    // IND ENG
    // IND ENG


    IndEngCpmBuidlingColumns: string[] = ['s_no', 'building', 'today_actual', 'tilldate_actual', 'today_produced_mins', 'tilldate_produced_mins', 'today_expense', 'tilldate_expense', 'today_cpm', 'tilldate_cpm'];
    IndEngCpmBuidlingSource: MatTableDataSource<any>;

    IndEngCpmFloorColumns: string[] = ['s_no', 'floor', 'today_actual', 'tilldate_actual', 'today_produced_mins', 'tilldate_produced_mins', 'today_expense', 'tilldate_expense', 'today_cpm', 'tilldate_cpm'];
    IndEngCpmFoorSource: MatTableDataSource<any>;


    IndEngCpmLineColumns: string[] = ['s_no', 'line', 'today_actual', 'tilldate_actual', 'today_produced_mins', 'tilldate_produced_mins', 'today_expense', 'tilldate_expense', 'today_cpm', 'tilldate_cpm'];
    IndEngCpmLineSource: MatTableDataSource<any>;


    // IND ENG
    // IND ENG

    // management kpi data
    // management kpi data
    // 'today_inhouse_pack', 'tilldate_inhouse_pack', 'today_outhouse_pack', 'tilldate_outhouse_pack',

    managementTableColumns: string[] = ['unit', 'today_cut', 'tilldate_cut', 'today_inhouse_stitch', 'tilldate_inhouse_stitch', 'today_outhouse_stitch', 'tilldate_outhouse_stitch', 'today_piece_rate', 'tilldate_piece_rate', 'today_total_stitch', 'tilldate_total_stitch', 'today_total_pack', 'tilldate_total_pack', 'ftd_pcs', 'ftd_amount', 'mtd_pcs', 'mtd_amount', 'ytd_pcs', 'ytd_amount'];
    managementTableColumnsSource: MatTableDataSource<any>;

    // management kpi data
    // management kpi data

    // despatch wip
    // despatch wip

    despatchWipColumns: string[] = ['s_no', 'style_id', 'warehouse_inward', 'dispatch_qty', 'balance'];
    despatchWipSource: MatTableDataSource<any>;

    // despatch wip
    // despatch wip

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    FilterData: any = {
        cmp_id: '2',
        to_date: '2023-11-07',
        from_date: '2023-11-07',
        detail_date: '2023-11-07',
        from: '',
        floor_id: '',
        period: 'for_date'
    };


    dashboard_depts: any = [];
    floor_depts: any = [];
    line_depts: any = [];
    floor_styles: any = [];
    cutting_details_data: any = [];
    sewing_details_data: any = [];
    samp_produce_data: any = [];
    cut_fab_utlz_data: any = [];

    /**
     * Constructor
     *
     */
    constructor(private HttpService: HttpService) {

        console.log(environment);



        this.getData();
    }


    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {

        this.HttpService.postData('masters/CompanySB', {}).subscribe((response: any) => {
            this.companies = response.result;
        });

    }



    unitClicked: boolean = false;
    FloorClicked: boolean = false;
    widClicked: boolean = false;
    SewingDetClicked: boolean = false;
    QualityDetClicked: boolean = false;
    FabricCostClicked: boolean = false;
    QualityCostDatewiseClicked: boolean = false;
    ReCuttingClicked: boolean = false;
    CuttingFabUtlzClicked1: boolean = false;
    CuttingFabUtlzClicked2: boolean = false;
    CuttingFabUtlzClicked3: boolean = false;

    // variables //

    CuttingDownTimeDatewiseClicked: boolean = false;
    CuttingDownTimeClicked: boolean = false;
    CuttingCostDeDatewisetClicked: boolean = false;
    CuttingCostDetClicked: boolean = false;

    companies: any = [];


    getData() {
        this.unitClicked = false;
        this.FloorClicked = false;
        this.widClicked = false;
    }

    getDataFloorWise(dept: any) {
        this.unitClicked = true;
        this.FloorClicked = false;
        this.FilterData.config_dept_id = dept.config_dept_id;
        this.FilterData.production_type = dept.production_type;
        this.FilterData.dep_name = dept.dep_name;
        this.HttpService.postData('dashboard/getProdDashboardFloorWise', this.FilterData).subscribe((response: any) => {
            this.floor_depts = response.result;

        });
    }

    getDataLineWise(dept: any) {
        this.FloorClicked = true;

        if (this.FilterData.production_type === 'line_wise') {
            this.FilterData.floor_id = dept.floor_id;
            this.FilterData.floor_name = dept.floor_name;
            this.HttpService.postData('dashboard/getProdDashboardLineWise', this.FilterData).subscribe((response: any) => {
                this.line_depts = response.result;

            });
        }
        else {
            this.FilterData.floor_id = dept.floor_id;
            this.FilterData.floor_name = dept.floor_name;
            this.HttpService.postData('dashboard/getProdDashboardStyleWise', this.FilterData).subscribe((response: any) => {
                this.floor_styles = response.result;

            });
        }
    }

    cutting_prod: number = 0;
    cutting_exp: number = 0;
    cutting_rev: number = 0;
    cutting_pl: number = 0;
    cutting_till_pl: number = 0;

    today_downtime: number = 0;
    tilldate_downtime: number = 0;
    today_cost_loss: number = 0;
    tilldate_cost_loss: number = 0;

    today_recut: number = 0;
    total_recut: number = 0;
    today_recut_perc: number = 0;
    total_recut_perc: number = 0;
    fab_cost_savings: number = 0;

    CuttingKpiData(wid_data: any) {
        this.widClicked = true;
        this.FilterData.wid_data = wid_data;

        this.HttpService.postData('dashboard/CuttingKpiData', this.FilterData).subscribe(res => {
            this.cutting_prod = res.result.cutting_kpi_data.cutting_prod;
            this.cutting_exp = res.result.cutting_kpi_data.cutting_exp;
            this.cutting_rev = res.result.cutting_kpi_data.cutting_rev;
            this.cutting_pl = res.result.cutting_kpi_data.cutting_pl;
            this.cutting_till_pl = res.result.cutting_kpi_data.cutting_till_pl;

            this.today_downtime = res.result.cutting_downtme.today_downtime;
            this.tilldate_downtime = res.result.cutting_downtme.tilldate_downtime;
            this.today_cost_loss = res.result.cutting_downtme.today_cost_loss;
            this.tilldate_cost_loss = res.result.cutting_downtme.tilldate_cost_loss;

            this.today_recut = res.result.recut.today_recut;
            this.total_recut = res.result.recut.total_recut;
            this.today_recut_perc = res.result.recut.today_recut_perc;
            this.total_recut_perc = res.result.recut.total_recut_perc;
            this.fab_cost_savings = res.result.recut.fab_cost_savings;
        })
    }

    today_eff: number = 0;
    upto_date_eff: number = 0;
    today_target: number = 0;
    upto_date_target: number = 0;

    sew_prod: number = 0;
    sew_expense: number = 0;
    sew_revenue: number = 0;
    sew_pl: number = 0;
    sew_till_pl: number = 0;

    sew_inspected: number = 0;
    sew_pass: number = 0;
    sew_defect: number = 0;
    sew_dhu_perc: number = 0;
    till_sew_dhu_perc: number = 0;
    sew_rej_perc: number = 0;
    till_rej_perc: number = 0;
    sew_rej: number = 0;

    cutting_loaded: number = 0;
    packing_fg: number = 0;
    inline_wip: number = 0;

    SewingKpiData(wid_data: any) {
        this.widClicked = true;
        this.FilterData.wid_data = wid_data;

        this.HttpService.postData('dashboard/SewingKpiData', this.FilterData).subscribe((res: any) => {
            this.today_eff = res.result.sewing_eff_data.today_eff;
            this.upto_date_eff = res.result.sewing_eff_data.upto_date_eff;
            this.today_target = res.result.sewing_eff_data.today_target;
            this.upto_date_target = res.result.sewing_eff_data.upto_date_target;

            this.sew_prod = res.result.sewing_pl.sew_prod;
            this.sew_expense = res.result.sewing_pl.sew_expense;
            this.sew_revenue = res.result.sewing_pl.sew_revenue;
            this.sew_pl = res.result.sewing_pl.sew_pl;
            this.sew_till_pl = res.result.sewing_pl.sew_till_pl;

            this.sew_inspected = res.result.sewing_dhu.sew_inspected;
            this.sew_pass = res.result.sewing_dhu.sew_pass;
            this.sew_defect = res.result.sewing_dhu.sew_defect;
            this.sew_dhu_perc = res.result.sewing_dhu.sew_dhu_perc;
            this.till_sew_dhu_perc = res.result.sewing_dhu.till_dhu_perc;

            this.sew_rej = res.result.sewing_dhu.sew_rej;
            this.sew_rej_perc = res.result.sewing_dhu.sew_rej_perc;
            this.till_rej_perc = res.result.sewing_dhu.till_rej_perc;


            this.cutting_loaded = res.result.mis_pcs.cutting_loaded;
            this.packing_fg = res.result.mis_pcs.packing_fg;
            this.inline_wip = res.result.mis_pcs.inline_wip;

        });
    }

    ManagementKPIClicked: boolean = false;
    management_data: any = [];

    ManagementKpiData() {
        this.widClicked = true;
        this.ManagementKPIClicked = true;

        this.HttpService.postData('dashboard/getmanagementData', this.FilterData).subscribe((response: any) => {
            this.management_data = response.result;
            this.managementTableColumnsSource = new MatTableDataSource(this.management_data);
            this.managementTableColumnsSource.paginator = this.paginator;
            this.managementTableColumnsSource.sort = this.sort;

        });

    }

    SewingEffBuildingClicked: boolean = false;
    SewingEffFloorClicked: boolean = false;
    SewingEffLineClicked: boolean = false;
    SewingCostBuildingClicked: boolean = false;
    SewingCostFloorClicked: boolean = false;
    SewingCostLineClicked: boolean = false;
    SewingDhuBuildingClicked: boolean = false;
    SewingDhuFloorClicked: boolean = false;
    SewingDhuLineClicked: boolean = false;
    SewingRejBuildingClicked: boolean = false;
    SewingRejFloorClicked: boolean = false;
    SewingRejLineClicked: boolean = false;
    SewingMisPcsBuildingClicked: boolean = false;
    SewingMisPcsFloorClicked: boolean = false;
    SewingMisPcsLineClicked: boolean = false;
    SewingMisPcsLotClicked: boolean = false;
    sewing_det_data1: any = [];
    sewing_det_data2: any = [];
    sewing_det_data3: any = [];
    sewing_cost_data: any = [];
    sewing_floor_data: any = [];
    sewing_line_data: any = [];

    SewingKpiDetail(wid_data: any, building: any, floor: any, line: any) {
        if (wid_data === 'sewing_eff_buiding') {
            this.SewingEffBuildingClicked = true;
            this.HttpService.postData('dashboard/getSewingEffBuildingDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data1 = response.result;
                this.SewingEffBuidlingSource = new MatTableDataSource(this.sewing_det_data1);
                this.SewingEffBuidlingSource.paginator = this.paginator;
                this.SewingEffBuidlingSource.sort = this.sort;

            });
        }
        else if (wid_data === 'sewing_eff_floor') {
            this.FilterData.building_id = building;
            this.SewingEffFloorClicked = true;
            this.HttpService.postData('dashboard/getSewingEffFloorDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data2 = response.result;
                this.SewingEffFoorSource = new MatTableDataSource(this.sewing_det_data2);
                this.SewingEffFoorSource.paginator = this.paginator;
                this.SewingEffFoorSource.sort = this.sort;

            });
        }
        else if (wid_data === 'sewing_eff_line') {
            this.FilterData.building_id = building;
            this.FilterData.floor_id = floor;
            this.SewingEffLineClicked = true;
            this.HttpService.postData('dashboard/getSewingEffLineDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data3 = response.result;
                this.SewingEffLineSource = new MatTableDataSource(this.sewing_det_data3);
                this.SewingEffLineSource.paginator = this.paginator;
                this.SewingEffLineSource.sort = this.sort;

            });
        }
        else if (wid_data === 'sewing_cost_buiding') {
            this.SewingCostBuildingClicked = true;
            this.HttpService.postData('dashboard/getSewingCostBuildingDet', this.FilterData).subscribe((response: any) => {
                this.sewing_cost_data = response.result;
                this.SewingCostBuidlingSource = new MatTableDataSource(this.sewing_cost_data);
                this.SewingCostBuidlingSource.paginator = this.paginator;
                this.SewingCostBuidlingSource.sort = this.sort;

            });
        }
        else if (wid_data === 'sewing_cost_floor') {
            this.SewingCostFloorClicked = true;
            this.FilterData.building_id = building;
            this.HttpService.postData('dashboard/getSewingCostFloorDet', this.FilterData).subscribe((response: any) => {
                this.sewing_floor_data = response.result;
                this.SewingCostFloorSource = new MatTableDataSource(this.sewing_floor_data);
                this.SewingCostFloorSource.paginator = this.paginator;
                this.SewingCostFloorSource.sort = this.sort;

            });
        }
        else if (wid_data === 'sewing_cost_line') {
            this.SewingCostLineClicked = true;
            this.FilterData.building_id = building;
            this.FilterData.floor_id = floor;
            this.HttpService.postData('dashboard/getSewingCostLineDet', this.FilterData).subscribe((response: any) => {
                this.sewing_line_data = response.result;
                this.SewingCostLineSource = new MatTableDataSource(this.sewing_line_data);
                this.SewingCostLineSource.paginator = this.paginator;
                this.SewingCostLineSource.sort = this.sort;

            });
        }
        else if (wid_data === 'sewing_dhu_building') {
            this.SewingDhuBuildingClicked = true;
            this.HttpService.postData('dashboard/getSewingDhuBuilding', this.FilterData).subscribe((response: any) => {
                this.sewing_cost_data = response.result;
                this.SewingDhuBuildingSource = new MatTableDataSource(this.sewing_cost_data);
                this.SewingDhuBuildingSource.paginator = this.paginator;
                this.SewingDhuBuildingSource.sort = this.sort;

            });
        }
        else if (wid_data === 'sewing_dhu_floor') {
            this.SewingDhuFloorClicked = true;
            this.FilterData.building_id = building;
            this.HttpService.postData('dashboard/getSewingDhuFloor', this.FilterData).subscribe((response: any) => {
                this.sewing_cost_data = response.result;
                this.SewingDhuFloorSource = new MatTableDataSource(this.sewing_cost_data);
                this.SewingDhuFloorSource.paginator = this.paginator;
                this.SewingDhuFloorSource.sort = this.sort;

            });
        }
        else if (wid_data === 'sewing_dhu_line') {
            this.SewingDhuLineClicked = true;
            this.FilterData.building_id = building;
            this.FilterData.floor_id = floor;
            this.HttpService.postData('dashboard/getSewingDhuLine', this.FilterData).subscribe((response: any) => {
                this.sewing_cost_data = response.result;
                this.SewingDhuLineSource = new MatTableDataSource(this.sewing_cost_data);
                this.SewingDhuLineSource.paginator = this.paginator;
                this.SewingDhuLineSource.sort = this.sort;

            });
        }
        else if (wid_data === 'sewing_rej_building') {
            this.SewingRejBuildingClicked = true;
            this.HttpService.postData('dashboard/getSewingRejBuilding', this.FilterData).subscribe((response: any) => {
                this.sewing_cost_data = response.result;
                this.SewingRejBuildingSource = new MatTableDataSource(this.sewing_cost_data);
                this.SewingRejBuildingSource.paginator = this.paginator;
                this.SewingRejBuildingSource.sort = this.sort;

            });
        }
        else if (wid_data === 'sewing_rej_floor') {
            this.SewingRejFloorClicked = true;
            this.FilterData.building_id = building;
            this.HttpService.postData('dashboard/getSewingRejFloor', this.FilterData).subscribe((response: any) => {
                this.sewing_cost_data = response.result;
                this.SewingRejFloorSource = new MatTableDataSource(this.sewing_cost_data);
                this.SewingRejFloorSource.paginator = this.paginator;
                this.SewingRejFloorSource.sort = this.sort;

            });
        }
        else if (wid_data === 'sewing_rej_line') {
            ``
            this.SewingRejLineClicked = true;
            this.FilterData.building_id = building;
            this.FilterData.floor_id = floor;
            this.HttpService.postData('dashboard/getSewingRejLine', this.FilterData).subscribe((response: any) => {
                this.sewing_cost_data = response.result;
                this.SewingRejLineSource = new MatTableDataSource(this.sewing_cost_data);
                this.SewingRejLineSource.paginator = this.paginator;
                this.SewingRejLineSource.sort = this.sort;

            });
        }
        else if (wid_data === 'sewing_mis_pcs_building') {
            this.SewingMisPcsBuildingClicked = true;
            this.HttpService.postData('dashboard/getSewingMisPcsBuilding', this.FilterData).subscribe((response: any) => {
                this.sewing_cost_data = response.result;
                this.SewingMisPcsBuildingSource = new MatTableDataSource(this.sewing_cost_data);
                this.SewingMisPcsBuildingSource.paginator = this.paginator;
                this.SewingMisPcsBuildingSource.sort = this.sort;

            });
        }
        else if (wid_data === 'sewing_mis_pcs_floor') {
            this.FilterData.building_id = building;
            this.SewingMisPcsFloorClicked = true;
            this.HttpService.postData('dashboard/getSewingMisPcsFloor', this.FilterData).subscribe((response: any) => {
                this.sewing_cost_data = response.result;
                this.SewingMisPcsFloorSource = new MatTableDataSource(this.sewing_cost_data);
                this.SewingMisPcsFloorSource.paginator = this.paginator;
                this.SewingMisPcsFloorSource.sort = this.sort;

            });
        }
        else if (wid_data === 'sewing_mis_pcs_line') {
            this.FilterData.building_id = building;
            this.FilterData.floor_id = floor;
            this.SewingMisPcsLineClicked = true;
            this.HttpService.postData('dashboard/getSewingMisPcsLine', this.FilterData).subscribe((response: any) => {
                this.sewing_cost_data = response.result;
                this.SewingMisPcsLineSource = new MatTableDataSource(this.sewing_cost_data);
                this.SewingMisPcsLineSource.paginator = this.paginator;
                this.SewingMisPcsLineSource.sort = this.sort;

            });
        }
        else if (wid_data === 'sewing_mis_pcs_lot') {
            this.SewingMisPcsLotClicked = true;
            this.FilterData.building_id = building;
            this.FilterData.floor_id = floor;
            this.FilterData.line_id = line;
            this.HttpService.postData('dashboard/getSewingMisPcs', this.FilterData).subscribe((response: any) => {
                this.sewing_cost_data = response.result;
                this.SewingMisPcsLotSource = new MatTableDataSource(this.sewing_cost_data);
                this.SewingMisPcsLotSource.paginator = this.paginator;
                this.SewingMisPcsLotSource.sort = this.sort;

            });
        }
    }

    qc_inspected: number = 0;
    qc_pass: number = 0;
    qc_defect: number = 0;
    qc_dhu_perc: number = 0;
    till_qc_dhu_perc: number = 0;

    qc_today_downtime: number = 0;
    qc_tilldate_downtime: number = 0;
    qc_today_cost_loss: number = 0;
    qc_tilldate_cost_loss: number = 0;

    inspected_qty: number = 0;
    qc_exp: number = 0;
    quality_cost: number = 0;
    tilldate_quality_cost: number = 0;
    qc_rft_perc: number = 0;
    tilldate_qc_rft_perc: number = 0;

    QualityKpiData(wid_data: any) {
        this.widClicked = true;
        this.FilterData.wid_data = wid_data;

        this.HttpService.postData('dashboard/QualityKpiData', this.FilterData).subscribe((res: any) => {

            this.qc_today_downtime = res.result.qc_downtme.today_downtime;
            this.qc_tilldate_downtime = res.result.qc_downtme.tilldate_downtime;
            this.qc_today_cost_loss = res.result.qc_downtme.today_cost_loss;
            this.qc_tilldate_cost_loss = res.result.qc_downtme.tilldate_cost_loss;


            this.qc_inspected = res.result.sewing_dhu.sew_inspected;
            this.qc_pass = res.result.sewing_dhu.sew_pass;
            this.qc_defect = res.result.sewing_dhu.sew_defect;
            this.qc_dhu_perc = res.result.sewing_dhu.sew_dhu_perc;
            this.till_qc_dhu_perc = res.result.sewing_dhu.till_dhu_perc;

            this.inspected_qty = res.result.qc_cost.inspected_qty;
            this.qc_exp = res.result.qc_cost.qc_exp;
            this.quality_cost = res.result.qc_cost.quality_cost;
            this.tilldate_quality_cost = res.result.qc_cost.tilldate_quality_cost;
            this.qc_rft_perc = res.result.qc_cost.qc_rft_perc;
            this.tilldate_qc_rft_perc = res.result.qc_cost.tilldate_qc_rft_perc;
        });
    }

    QualityDownTimeDatewiseClicked: boolean = false;
    QualityDownTimeClicked: boolean = false;
    QualityRftBuildingClicked: boolean = false;
    QualityRftFloorClicked: boolean = false;
    QualityRftLineClicked: boolean = false;

    QualityKpiDetail(wid_data: any, detail_date: any, building: any, floor: any) {
        if (wid_data === 'quality_dhu') {
            this.QualityDetClicked = true;
            this.HttpService.postData('dashboard/getCuttingkPI', this.FilterData).subscribe((response: any) => {
                this.cutting_details_data = response.result;
                this.QualityDhuDataSource = new MatTableDataSource(this.cutting_details_data);
                this.QualityDhuDataSource.paginator = this.paginator;
                this.QualityDhuDataSource.sort = this.sort;

            });
        }
        else if (wid_data === 'quality_cost_datewise') {
            this.QualityCostDatewiseClicked = true;
            this.HttpService.postData('dashboard/getQcCostDatewise', this.FilterData).subscribe((response: any) => {
                this.cutting_details_data = response.result;
                this.QualityCostDatewiseDataSource = new MatTableDataSource(this.cutting_details_data);
                this.QualityCostDatewiseDataSource.paginator = this.paginator;
                this.QualityCostDatewiseDataSource.sort = this.sort;

            });
        }
        else if (wid_data === 'quality_downtime') {
            this.QualityDownTimeDatewiseClicked = true;
            this.HttpService.postData('dashboard/getQualityDowntimeDatewise', this.FilterData).subscribe((response: any) => {
                this.samp_produce_data = response.result;
                this.QualityDownTimeDatewiseSource = new MatTableDataSource(this.samp_produce_data);
                this.QualityDownTimeDatewiseSource.paginator = this.paginator;
                this.QualityDownTimeDatewiseSource.sort = this.sort;

            });
        }
        else if (wid_data === 'quality_downtime_det') {
            this.FilterData.detail_date = detail_date;
            this.QualityDownTimeClicked = true;
            this.HttpService.postData('dashboard/getQualityDowntimeDet', this.FilterData).subscribe((response: any) => {
                this.samp_produce_data = response.result;
                this.QualityDownTimeDataSource = new MatTableDataSource(this.samp_produce_data);
                this.QualityDownTimeDataSource.paginator = this.paginator;
                this.QualityDownTimeDataSource.sort = this.sort;

            });
        }
        else if (wid_data === 'quality_rft_buiding') {
            this.QualityRftBuildingClicked = true;
            this.HttpService.postData('dashboard/getSewingRftBuildingDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data1 = response.result;
                this.QualityRftBuildingSource = new MatTableDataSource(this.sewing_det_data1);
                this.QualityRftBuildingSource.paginator = this.paginator;
                this.QualityRftBuildingSource.sort = this.sort;

            });
        }
        else if (wid_data === 'quality_rft_floor') {
            this.FilterData.building_id = building;
            this.QualityRftFloorClicked = true;
            this.HttpService.postData('dashboard/getSewingRftFloorDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data2 = response.result;
                this.QualityRftFloorSource = new MatTableDataSource(this.sewing_det_data2);
                this.QualityRftFloorSource.paginator = this.paginator;
                this.QualityRftFloorSource.sort = this.sort;

            });
        }
        else if (wid_data === 'quality_rft_line') {
            this.FilterData.building_id = building;
            this.FilterData.floor_id = floor;
            this.QualityRftLineClicked = true;
            this.HttpService.postData('dashboard/getSewingRftLineDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data3 = response.result;
                this.QualityRftLineSource = new MatTableDataSource(this.sewing_det_data3);
                this.QualityRftLineSource.paginator = this.paginator;
                this.QualityRftLineSource.sort = this.sort;

            });
        }
    }

    strength: number = 0;
    present: number = 0;
    absent: number = 0;
    absent_perc: number = 0;
    tilldate_absent_perc: number = 0;
    planned_leaves: number = 0;
    planned_perc: number = 0;
    tilldate_planned_perc: number = 0;
    un_planned_leaves: number = 0;
    un_planned_perc: number = 0;
    tilldate_un_planned_perc: number = 0;
    operators_present: number = 0;
    mmr: number = 0;
    sanction: number = 0;
    sanction_cost_budget: number = 0;
    sanction_cost_diff: number = 0;
    sanction_diff: number = 0;
    total_cost: number = 0;

    tilldate_left: number = 0;
    tilldate_atr: number = 0;

    HrKpiData(wid_data: any) {
        this.widClicked = true;
        this.FilterData.wid_data = wid_data;

        this.HttpService.postData('dashboard/getHrKPiData', this.FilterData).subscribe((res: any) => {
            this.strength = res.result.absentism_data.strength;
            this.present = res.result.absentism_data.present;
            this.absent = res.result.absentism_data.absent;
            this.absent_perc = res.result.absentism_data.absent_perc;
            this.tilldate_absent_perc = res.result.absentism_data.tilldate_absent_perc;
            this.planned_leaves = res.result.absentism_data.planned_leaves;
            this.planned_perc = res.result.absentism_data.planned_perc;
            this.tilldate_planned_perc = res.result.absentism_data.tilldate_planned_perc;
            this.un_planned_leaves = res.result.absentism_data.un_planned_leaves;
            this.un_planned_perc = res.result.absentism_data.un_planned_perc;
            this.tilldate_un_planned_perc = res.result.absentism_data.tilldate_un_planned_perc;
            this.operators_present = res.result.absentism_data.operators_present;
            this.mmr = res.result.absentism_data.mmr;
            this.sanction = res.result.absentism_data.sanction;
            this.sanction_cost_budget = res.result.absentism_data.sanction_cost_budget;
            this.sanction_cost_diff = res.result.absentism_data.sanction_cost_diff;
            this.sanction_diff = res.result.absentism_data.sanction_diff;
            this.total_cost = res.result.absentism_data.total_cost;

            this.tilldate_left = res.result.attrition_data.tilldate_left;
            this.tilldate_atr = res.result.attrition_data.tilldate_atr;

        });
    }

    HrAtrBuildingClicked: boolean = false;
    HrAtrFloorClicked: boolean = false;
    HrAtrLineClicked: boolean = false;

    HrAbsentBuildingClicked: boolean = false;
    HrAbsentFloorClicked: boolean = false;
    HrAbsentLineClicked: boolean = false;

    HrUnplannedBuildingClicked: boolean = false;
    HrUnplannedFloorClicked: boolean = false;
    HrUnplannedLineClicked: boolean = false;

    HrMmrBuildingClicked: boolean = false;
    HrMmrFloorClicked: boolean = false;
    HrMmrLineClicked: boolean = false;

    HrBudgetBuildingClicked: boolean = false;
    HrBudgetFloorClicked: boolean = false;
    HrBudgetLineClicked: boolean = false;


    HrBudgetCostBuildingClicked: boolean = false;
    HrBudgetCostFloorClicked: boolean = false;
    HrBudgetCostLineClicked: boolean = false;



    hrbuildingdata: any = [];
    hrfloordata: any = [];
    hrlinedata: any = [];

    HrKpiDetail(wid_data: any, type = '', building: any, floor: any) {
        if (wid_data === 'absentism_building') {
            this.HrAbsentBuildingClicked = true;
            this.HttpService.postData('dashboard/getHrAbsentBuildingDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data1 = response.result;
                this.HrAbsentBuildingSource = new MatTableDataSource(this.sewing_det_data1);
                this.HrAbsentBuildingSource.paginator = this.paginator;
                this.HrAbsentBuildingSource.sort = this.sort;

            });
        }
        else if (wid_data === 'absentism_floor' && type === 'building') {
            this.FilterData.building_id = building;
            this.HrAbsentFloorClicked = true;
            this.HttpService.postData('dashboard/getHrAbsentFloorDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data2 = response.result;
                this.HrAbsentFloorSource = new MatTableDataSource(this.sewing_det_data2);
                this.HrAbsentFloorSource.paginator = this.paginator;
                this.HrAbsentFloorSource.sort = this.sort;

            });
        }
        else if (wid_data === 'absentism_line') {
            this.FilterData.building_id = building;
            this.FilterData.floor_id = floor;
            this.HrAbsentLineClicked = true;
            this.HttpService.postData('dashboard/getHrAbsentLineDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data3 = response.result;
                this.HrAbsentLineSource = new MatTableDataSource(this.sewing_det_data3);
                this.HrAbsentLineSource.paginator = this.paginator;
                this.HrAbsentLineSource.sort = this.sort;

            });
        }
        else if (wid_data === 'hrunplanned_building') {
            this.HrUnplannedBuildingClicked = true;
            this.HttpService.postData('dashboard/getHrUnplannedBuildingDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data1 = response.result;
                this.HrUnplannedBuildingSource = new MatTableDataSource(this.sewing_det_data1);
                this.HrUnplannedBuildingSource.paginator = this.paginator;
                this.HrUnplannedBuildingSource.sort = this.sort;

            });
        }
        else if (wid_data === 'hrunplanned_floor' && type === 'building') {
            this.FilterData.building_id = building;
            this.HrUnplannedFloorClicked = true;
            this.HttpService.postData('dashboard/getHrUnplannedFloorDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data2 = response.result;
                this.HrUnplannedFloorSource = new MatTableDataSource(this.sewing_det_data2);
                this.HrUnplannedFloorSource.paginator = this.paginator;
                this.HrUnplannedFloorSource.sort = this.sort;

            });
        }
        else if (wid_data === 'hrunplanned_line') {
            this.FilterData.building_id = building;
            this.FilterData.floor_id = floor;
            this.HrUnplannedLineClicked = true;
            this.HttpService.postData('dashboard/getHrUnplannedLineDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data3 = response.result;
                this.HrUnplannedLineSource = new MatTableDataSource(this.sewing_det_data3);
                this.HrUnplannedLineSource.paginator = this.paginator;
                this.HrUnplannedLineSource.sort = this.sort;

            });
        }
        else if (wid_data === 'hrmmr_building') {
            this.HrMmrBuildingClicked = true;
            this.HttpService.postData('dashboard/getHrMmrBuildingDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data1 = response.result;
                this.HrMmrBuildingSource = new MatTableDataSource(this.sewing_det_data1);
                this.HrMmrBuildingSource.paginator = this.paginator;
                this.HrMmrBuildingSource.sort = this.sort;

            });
        }
        else if (wid_data === 'hrmmr_floor' && type === 'building') {
            this.FilterData.building_id = building;
            this.HrMmrFloorClicked = true;
            this.HttpService.postData('dashboard/getHrMmrFloorDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data2 = response.result;
                this.HrMmrFloorSource = new MatTableDataSource(this.sewing_det_data2);
                this.HrMmrFloorSource.paginator = this.paginator;
                this.HrMmrFloorSource.sort = this.sort;

            });
        }
        else if (wid_data === 'hrmmr_line') {
            this.FilterData.building_id = building;
            this.FilterData.floor_id = floor;
            this.HrMmrLineClicked = true;
            this.HttpService.postData('dashboard/getHrMmrLineDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data3 = response.result;
                this.HrMmrLineSource = new MatTableDataSource(this.sewing_det_data3);
                this.HrMmrLineSource.paginator = this.paginator;
                this.HrMmrLineSource.sort = this.sort;

            });
        }
        else if (wid_data === 'hrbudget_building') {
            this.HrBudgetBuildingClicked = true;
            this.HttpService.postData('dashboard/getHrBudgetBuildingDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data1 = response.result;
                this.HrBudgetBuildingSource = new MatTableDataSource(this.sewing_det_data1);
                this.HrBudgetBuildingSource.paginator = this.paginator;
                this.HrBudgetBuildingSource.sort = this.sort;

            });
        }
        else if (wid_data === 'hrbudget_floor' && type === 'building') {
            this.FilterData.building_id = building;
            this.HrBudgetFloorClicked = true;
            this.HttpService.postData('dashboard/getHrBudgetFloorDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data2 = response.result;
                this.HrBudgetFloorSource = new MatTableDataSource(this.sewing_det_data2);
                this.HrBudgetFloorSource.paginator = this.paginator;
                this.HrBudgetFloorSource.sort = this.sort;

            });
        }
        else if (wid_data === 'hrbudget_line') {
            this.FilterData.building_id = building;
            this.FilterData.floor_id = floor;
            this.HrBudgetLineClicked = true;
            this.HttpService.postData('dashboard/getHrBudgetLineDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data3 = response.result;
                this.HrBudgetLineSource = new MatTableDataSource(this.sewing_det_data3);
                this.HrBudgetLineSource.paginator = this.paginator;
                this.HrBudgetLineSource.sort = this.sort;

            });
        }
        else if (wid_data === 'hrbudgetcost_building') {
            this.HrBudgetCostBuildingClicked = true;
            this.HttpService.postData('dashboard/getHrBudgetCostBuildingDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data1 = response.result;
                this.HrBudgetCostBuildingSource = new MatTableDataSource(this.sewing_det_data1);
                this.HrBudgetCostBuildingSource.paginator = this.paginator;
                this.HrBudgetCostBuildingSource.sort = this.sort;

            });
        }
        else if (wid_data === 'hrbudgetcost_floor' && type === 'building') {
            this.FilterData.building_id = building;
            this.HrBudgetCostFloorClicked = true;
            this.HttpService.postData('dashboard/getHrBudgetCostFloorDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data2 = response.result;
                this.HrBudgetCostFloorSource = new MatTableDataSource(this.sewing_det_data2);
                this.HrBudgetCostFloorSource.paginator = this.paginator;
                this.HrBudgetCostFloorSource.sort = this.sort;

            });
        }
        else if (wid_data === 'hrbudgetcost_line') {
            this.FilterData.building_id = building;
            this.FilterData.floor_id = floor;
            this.HrBudgetCostLineClicked = true;
            this.HttpService.postData('dashboard/getHrBudgetCostLineDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data3 = response.result;
                this.HrBudgetCostLineSource = new MatTableDataSource(this.sewing_det_data3);
                this.HrBudgetCostLineSource.paginator = this.paginator;
                this.HrBudgetCostLineSource.sort = this.sort;

            });
        }
        else if (wid_data === 'htatr_building') {
            this.HrAtrBuildingClicked = true;
            this.HttpService.postData('dashboard/getHrAtrBuildingDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data1 = response.result;
                this.HrAtrBuildingSource = new MatTableDataSource(this.sewing_det_data1);
                this.HrAtrBuildingSource.paginator = this.paginator;
                this.HrAtrBuildingSource.sort = this.sort;

            });
        }
        else if (wid_data === 'htatr_floor' && type === 'building') {
            this.FilterData.building_id = building;
            this.HrAtrFloorClicked = true;
            this.HttpService.postData('dashboard/getHrAtrFloorDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data2 = response.result;
                this.HrAtrFloorSource = new MatTableDataSource(this.sewing_det_data2);
                this.HrAtrFloorSource.paginator = this.paginator;
                this.HrAtrFloorSource.sort = this.sort;

            });
        }
        else if (wid_data === 'htatr_line') {
            this.FilterData.building_id = building;
            this.FilterData.floor_id = floor;
            this.HrAtrLineClicked = true;
            this.HttpService.postData('dashboard/getHrAtrLineDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data3 = response.result;
                this.HrAtrLineSource = new MatTableDataSource(this.sewing_det_data3);
                this.HrAtrLineSource.paginator = this.paginator;
                this.HrAtrLineSource.sort = this.sort;

            });
        }

    }

    CuttingKpiDetail(wid_data: any, detail_date: any, style_id = '', fabric_id = '', jro_id = '') {
        if (wid_data === 'cutting_cost') {
            this.CuttingCostDetClicked = true;

            this.HttpService.postData('dashboard/getCuttingkPI', this.FilterData).subscribe((response: any) => {
                this.cutting_details_data = response.result;
                this.CuttingCostSource = new MatTableDataSource(this.cutting_details_data);
                this.CuttingCostSource.paginator = this.paginator;
                this.CuttingCostSource.sort = this.sort;

            });
        }
        else if (wid_data === 'cutting_cost_det') {
            this.CuttingCostDeDatewisetClicked = true;

            this.HttpService.postData('dashboard/getCuttingkPI', this.FilterData).subscribe((response: any) => {
                this.cutting_details_data = response.result;
                this.CuttingCostDatewiseSource = new MatTableDataSource(this.cutting_details_data);
                this.CuttingCostDatewiseSource.paginator = this.paginator;
                this.CuttingCostDatewiseSource.sort = this.sort;

            });
        }
        else if (wid_data === 'cutting_downtime') {
            this.CuttingDownTimeDatewiseClicked = true;
            this.HttpService.postData('dashboard/getCuttingDowntimeDatewise', this.FilterData).subscribe((response: any) => {
                this.samp_produce_data = response.result;
                this.CuttingDownTimeDatewiseSource = new MatTableDataSource(this.samp_produce_data);
                this.CuttingDownTimeDatewiseSource.paginator = this.paginator;
                this.CuttingDownTimeDatewiseSource.sort = this.sort;

            });
        }
        else if (wid_data === 'cutting_downtime_det') {
            this.FilterData.detail_date = detail_date;
            this.CuttingDownTimeClicked = true;
            this.HttpService.postData('dashboard/getCuttingDowntimeDet', this.FilterData).subscribe((response: any) => {
                this.samp_produce_data = response.result;
                this.CuttingDownTimeDataSource = new MatTableDataSource(this.samp_produce_data);
                this.CuttingDownTimeDataSource.paginator = this.paginator;
                this.CuttingDownTimeDataSource.sort = this.sort;

            });
        }
        else if (wid_data === 're_cuttings') {
            this.ReCuttingClicked = true;
            this.HttpService.postData('dashboard/getReCuttingData', this.FilterData).subscribe((response: any) => {
                this.sewing_details_data = response.result;
                this.RecuttingDataSource = new MatTableDataSource(this.sewing_details_data);
                this.RecuttingDataSource.paginator = this.paginator;
                this.RecuttingDataSource.sort = this.sort;

            });
        }
        else if (wid_data === 'fab_utliz1') {
            this.CuttingFabUtlzClicked1 = true;
            this.HttpService.postData('dashboard/getFabricUtlz1', this.FilterData).subscribe((response: any) => {
                this.cut_fab_utlz_data = response.result;
                this.CuttingFabUtlz1DataSource = new MatTableDataSource(this.cut_fab_utlz_data);
                this.CuttingFabUtlz1DataSource.paginator = this.paginator;
                this.CuttingFabUtlz1DataSource.sort = this.sort;

                this.cacheSpan('style_no', (d: any) => d.style_no);

            });
        }
        else if (wid_data === 'fab_utliz2') {
            this.CuttingFabUtlzClicked2 = true;
            this.FilterData.style_id = style_id;
            this.FilterData.fabric_id = fabric_id;
            this.HttpService.postData('dashboard/getFabricUtlz2', this.FilterData).subscribe((response: any) => {
                this.cut_fab_utlz_data = response.result;
                this.CuttingFabUtlzData2Source = new MatTableDataSource(this.cut_fab_utlz_data);
                this.CuttingFabUtlzData2Source.paginator = this.paginator;
                this.CuttingFabUtlzData2Source.sort = this.sort;

            });
        }
        else if (wid_data === 'fab_utliz3') {
            this.CuttingFabUtlzClicked3 = true;
            this.FilterData.style_id = style_id;
            this.FilterData.fabric_id = fabric_id;
            this.FilterData.jro_id = jro_id;
            this.HttpService.postData('dashboard/getFabricUtlz3', this.FilterData).subscribe((response: any) => {
                this.cut_fab_utlz_data = response.result;
                this.CuttingFabUtlzData3Source = new MatTableDataSource(this.cut_fab_utlz_data);
                this.CuttingFabUtlzData3Source.paginator = this.paginator;
                this.CuttingFabUtlzData3Source.sort = this.sort;

            });
        }
    }

    total_qty: number = 0;
    total_amt: number = 0;
    till_date_qty: number = 0;
    till_date_amt: number = 0;

    fab_today_downtime: number = 0;
    fab_tilldate_downtime: number = 0;
    fab_today_cost_loss: number = 0;
    fab_tilldate_cost_loss: number = 0;

    FabricKpiData(wid_data: any) {
        this.widClicked = true;
        this.FilterData.wid_data = wid_data;

        this.HttpService.postData('dashboard/getFabricKpiData', this.FilterData).subscribe((res: any) => {
            this.total_qty = res.result.fabric_cost.total_qty;
            this.total_amt = res.result.fabric_cost.total_amt;
            this.till_date_qty = res.result.fabric_cost.till_date_qty;
            this.till_date_amt = res.result.fabric_cost.till_date_amt;

            this.fab_today_downtime = res.result.fabdowntime.fab_today_downtime;
            this.fab_tilldate_downtime = res.result.fabdowntime.fab_tilldate_downtime;
            this.fab_today_cost_loss = res.result.fabdowntime.fab_today_cost_loss;
            this.fab_tilldate_cost_loss = res.result.fabdowntime.fab_tilldate_cost_loss;
        });
    }

    FabricKpiDetail(wid_data: any) {
        if (wid_data === 'fabric_cost') {
            this.FabricCostClicked = true;
            this.HttpService.postData('dashboard/getFabricCostDet', this.FilterData).subscribe((response: any) => {
                this.cutting_details_data = response.result;
                this.FabricCostDataSource = new MatTableDataSource(this.cutting_details_data);
                this.FabricCostDataSource.paginator = this.paginator;
                this.FabricCostDataSource.sort = this.sort;

            });
        }
    }

    fin_packing_fg: number = 0;
    fin_issue_wh: number = 0;
    fin_wip: number = 0;

    csg_prod: number = 0;
    csg_revenue: number = 0;
    csg_expense: number = 0;
    csg_pl: number = 0;
    csg_tilldate_pl: number = 0;

    finsihingKpiData(wid_data: any) {
        this.widClicked = true;
        this.FilterData.wid_data = wid_data;

        this.HttpService.postData('dashboard/finsihingKpiData', this.FilterData).subscribe((res: any) => {
            this.fin_packing_fg = res.result.wip.fin_packing_fg;
            this.fin_issue_wh = res.result.wip.fin_issue_wh;
            this.fin_wip = res.result.wip.fin_wip;

            this.csg_prod = res.result.csg.csg_prod;
            this.csg_revenue = res.result.csg.csg_revenue;
            this.csg_expense = res.result.csg.csg_expense;
            this.csg_pl = res.result.csg.csg_pl;
            this.csg_tilldate_pl = res.result.csg.csg_tilldate_pl;
        });
    }

    finishing_details_data: any = [];

    FinsingCsgBuildingClicked = false;
    FinsingCsgFloorClicked = false;
    finishing_csg_details_data: any = [];


    FinishingWipBuildingClicked: boolean = false;
    FinishingWipFloorClicked: boolean = false;
    FinishingWipLineClicked: boolean = false;
    FinishingWipLotClicked: boolean = false;

    FinishingKpiDetails(wid_data: any, building: any, floor: any, line: any) {
        if (wid_data === 'wip_control_building') {
            this.FinishingWipBuildingClicked = true;
            this.HttpService.postData('dashboard/getFinishingWipBuilding', this.FilterData).subscribe((response: any) => {
                this.finishing_details_data = response.result;
                this.FinishingWipBuildingSource = new MatTableDataSource(this.finishing_details_data);
                this.FinishingWipBuildingSource.paginator = this.paginator;
                this.FinishingWipBuildingSource.sort = this.sort;

            });
        }
        else if (wid_data === 'wip_control_floor') {
            this.FinishingWipFloorClicked = true;
            this.FilterData.building_id = building;
            this.HttpService.postData('dashboard/getFinishingWipFloor', this.FilterData).subscribe((response: any) => {
                this.finishing_details_data = response.result;
                this.FinishingWipFloorSource = new MatTableDataSource(this.finishing_details_data);
                this.FinishingWipFloorSource.paginator = this.paginator;
                this.FinishingWipFloorSource.sort = this.sort;

            });
        }
        else if (wid_data === 'wip_control_line') {
            this.FinishingWipLineClicked = true;
            this.FilterData.building_id = building;
            this.FilterData.floor_id = floor;
            this.HttpService.postData('dashboard/getFinishingWipLine', this.FilterData).subscribe((response: any) => {
                this.finishing_details_data = response.result;
                this.FinishingWipLineSource = new MatTableDataSource(this.finishing_details_data);
                this.FinishingWipLineSource.paginator = this.paginator;
                this.FinishingWipLineSource.sort = this.sort;

            });
        }
        else if (wid_data === 'wip_control_lot') {
            this.FinishingWipLotClicked = true;
            this.FilterData.building_id = building;
            this.FilterData.floor_id = floor;
            this.FilterData.line_id = line;
            this.HttpService.postData('dashboard/getFinishingWip', this.FilterData).subscribe((response: any) => {
                this.finishing_details_data = response.result;
                this.FinishingWipLotSource = new MatTableDataSource(this.finishing_details_data);
                this.FinishingWipLotSource.paginator = this.paginator;
                this.FinishingWipLotSource.sort = this.sort;

            });
        }
        else if (wid_data === 'cost_per_garment_building') {
            this.FinsingCsgBuildingClicked = true;
            this.HttpService.postData('dashboard/getFinishingCsgBuilding', this.FilterData).subscribe((response: any) => {
                this.finishing_csg_details_data = response.result;
                this.FinsingCsgBuidlingSource = new MatTableDataSource(this.finishing_csg_details_data);
                this.FinsingCsgBuidlingSource.paginator = this.paginator;
                this.FinsingCsgBuidlingSource.sort = this.sort;

            });
        }
        else if (wid_data === 'cost_per_garment_floor') {
            this.FilterData.building_id = building;
            this.FinsingCsgFloorClicked = true;
            this.HttpService.postData('dashboard/getFinishingCsgFloor', this.FilterData).subscribe((response: any) => {
                this.finishing_csg_details_data = response.result;
                this.FinsingCsgFloorSource = new MatTableDataSource(this.finishing_csg_details_data);
                this.FinsingCsgFloorSource.paginator = this.paginator;
                this.FinsingCsgFloorSource.sort = this.sort;

            });
        }
    }



    trims_today_downtime: number = 0;
    trims_tilldate_downtime: number = 0;
    trims_today_cost_loss: number = 0;
    trims_tilldate_cost_loss: number = 0;
    inventory_cost: number = 0;

    TrimsKpiData(wid_data: any) {
        this.widClicked = true;
        this.FilterData.wid_data = wid_data;

        this.HttpService.postData('dashboard/TrimsKpiData', this.FilterData).subscribe((res: any) => {
            this.trims_today_downtime = res.result.trims_downtme.today_downtime;
            this.trims_tilldate_downtime = res.result.trims_downtme.tilldate_downtime;
            this.trims_today_cost_loss = res.result.trims_downtme.today_cost_loss;
            this.trims_tilldate_cost_loss = res.result.trims_downtme.tilldate_cost_loss;
            this.inventory_cost = res.result.unused.inventory_cost;
        });
    }

    TrimsDownTimeDatewiseClicked: boolean = false;
    TrimsDownTimeClicked: boolean = false;
    TrimsUnusedGroupClicked: boolean = false;
    TrimsUnusedItemClicked: boolean = false;

    TrimsKpiDetail(wid_data: any, detail_date: any, item_group = '') {
        if (wid_data === 'trims_downtime') {
            this.TrimsDownTimeDatewiseClicked = true;
            this.HttpService.postData('dashboard/getTrimsDowntimeDatewise', this.FilterData).subscribe((response: any) => {
                this.samp_produce_data = response.result;
                this.TrimsDownTimeDatewiseSource = new MatTableDataSource(this.samp_produce_data);
                this.TrimsDownTimeDatewiseSource.paginator = this.paginator;
                this.TrimsDownTimeDatewiseSource.sort = this.sort;

            });
        }
        else if (wid_data === 'trims_downtime_det') {
            this.FilterData.detail_date = detail_date;
            this.TrimsDownTimeClicked = true;
            this.HttpService.postData('dashboard/getTrimsDowntimeDet', this.FilterData).subscribe((response: any) => {
                this.samp_produce_data = response.result;
                this.TrimsDownTimeDataSource = new MatTableDataSource(this.samp_produce_data);
                this.TrimsDownTimeDataSource.paginator = this.paginator;
                this.TrimsDownTimeDataSource.sort = this.sort;

            });
        }
        else if (wid_data === 'trims_unused_group') {
            this.TrimsUnusedGroupClicked = true;
            this.HttpService.postData('dashboard/getTrimsUnusedGroup', this.FilterData).subscribe((response: any) => {
                this.samp_produce_data = response.result;
                this.TrimsUnusedSource = new MatTableDataSource(this.samp_produce_data);
                this.TrimsUnusedSource.paginator = this.paginator;
                this.TrimsUnusedSource.sort = this.sort;

            });
        }
        else if (wid_data === 'trims_unused_item') {
            this.FilterData.item_group = item_group;
            this.TrimsUnusedItemClicked = true;
            this.HttpService.postData('dashboard/getTrimsUnusedItem', this.FilterData).subscribe((response: any) => {
                this.samp_produce_data = response.result;
                this.TrimsUnusedSource2 = new MatTableDataSource(this.samp_produce_data);
                this.TrimsUnusedSource2.paginator = this.paginator;
                this.TrimsUnusedSource2.sort = this.sort;

            });
        }
    }


    mnt_today_downtime: number = 0;
    mnt_tilldate_downtime: number = 0;
    mnt_today_cost_loss: number = 0;
    mnt_tilldate_cost_loss: number = 0;

    MntKpiData(wid_data: any) {
        this.widClicked = true;
        this.FilterData.wid_data = wid_data;

        this.HttpService.postData('dashboard/MntKpiData', this.FilterData).subscribe((res: any) => {
            this.mnt_today_downtime = res.result.mnt_downtme.today_downtime;
            this.mnt_tilldate_downtime = res.result.mnt_downtme.tilldate_downtime;
            this.mnt_today_cost_loss = res.result.mnt_downtme.today_cost_loss;
            this.mnt_tilldate_cost_loss = res.result.mnt_downtme.tilldate_cost_loss;
        });
    }

    MntDownTimeDatewiseClicked: boolean = false;
    MntDownTimeClicked: boolean = false;

    MntKpiDetail(wid_data: any, detail_date: any) {
        if (wid_data === 'mnt_downtime') {
            this.MntDownTimeDatewiseClicked = true;
            this.HttpService.postData('dashboard/getMntDowntimeDatewise', this.FilterData).subscribe((response: any) => {
                this.samp_produce_data = response.result;
                this.MntDownTimeDatewiseSource = new MatTableDataSource(this.samp_produce_data);
                this.MntDownTimeDatewiseSource.paginator = this.paginator;
                this.MntDownTimeDatewiseSource.sort = this.sort;

            });
        }
        else if (wid_data === 'mnt_downtime_det') {
            this.FilterData.detail_date = detail_date;
            this.MntDownTimeClicked = true;
            this.HttpService.postData('dashboard/getMntDowntimeDet', this.FilterData).subscribe((response: any) => {
                this.samp_produce_data = response.result;
                this.MntDownTimeDataSource = new MatTableDataSource(this.samp_produce_data);
                this.MntDownTimeDataSource.paginator = this.paginator;
                this.MntDownTimeDataSource.sort = this.sort;

            });
        }
    }


    ind_eng_today_eff: number = 0;
    ind_eng_upto_date_eff: number = 0;
    ind_eng_today_target: number = 0;
    ind_eng_upto_date_target: number = 0;
    ind_strength: number = 0;
    ind_present: number = 0;
    ind_operators_present: number = 0;
    ind_mmr: number = 0;
    ind_prod_qty: number = 0;
    ind_today_expense: number = 0;
    ind_today_produced_mins: number = 0;
    ind_today_cpm: number = 0;

    IndEngKpiData(wid_data: any) {
        this.widClicked = true;
        this.FilterData.wid_data = wid_data;


        this.HttpService.postData('dashboard/IndEngKpiData', this.FilterData).subscribe((res: any) => {
            this.ind_eng_today_eff = res.result.sewing_eff_data.today_eff;
            this.ind_eng_upto_date_eff = res.result.sewing_eff_data.upto_date_eff;
            this.ind_eng_today_target = res.result.sewing_eff_data.today_target;
            this.ind_eng_upto_date_target = res.result.sewing_eff_data.upto_date_target;

            this.ind_strength = res.result.absentism_data.strength;
            this.ind_present = res.result.absentism_data.present;
            this.ind_operators_present = res.result.absentism_data.operators_present;
            this.ind_mmr = res.result.absentism_data.mmr;

            this.ind_prod_qty = res.result.sewing_eff_data.prod_qty;
            this.ind_today_expense = res.result.sewing_eff_data.today_ov_expense;
            this.ind_today_produced_mins = res.result.sewing_eff_data.today_produced_mins;
            this.ind_today_cpm = res.result.sewing_eff_data.today_cpm;
        });
    }


    IndEngCpmBuildingClicked: boolean = false;
    IndEngCpmFloorClicked: boolean = false;
    IndEngCpmLineClicked: boolean = false;

    IndEngKpiDetail(wid_data: any, building: any, floor: any) {
        if (wid_data === 'ind_eng_cpm_buiding') {
            this.IndEngCpmBuildingClicked = true;
            this.HttpService.postData('dashboard/getIndEngCpmBuildingDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data1 = response.result;
                this.IndEngCpmBuidlingSource = new MatTableDataSource(this.sewing_det_data1);
                this.IndEngCpmBuidlingSource.paginator = this.paginator;
                this.IndEngCpmBuidlingSource.sort = this.sort;

            });
        }
        else if (wid_data === 'ind_eng_cpm_floor') {
            this.FilterData.building_id = building;
            this.IndEngCpmFloorClicked = true;
            this.HttpService.postData('dashboard/getIndEngCpmFloorDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data2 = response.result;
                this.IndEngCpmFoorSource = new MatTableDataSource(this.sewing_det_data2);
                this.IndEngCpmFoorSource.paginator = this.paginator;
                this.IndEngCpmFoorSource.sort = this.sort;

            });
        }
        else if (wid_data === 'ind_eng_cpm_line') {
            this.FilterData.building_id = building;
            this.FilterData.floor_id = floor;
            this.IndEngCpmLineClicked = true;
            this.HttpService.postData('dashboard/getIndEngCpmLineDet', this.FilterData).subscribe((response: any) => {
                this.sewing_det_data3 = response.result;
                this.IndEngCpmLineSource = new MatTableDataSource(this.sewing_det_data3);
                this.IndEngCpmLineSource.paginator = this.paginator;
                this.IndEngCpmLineSource.sort = this.sort;

            });
        }
    }

    warehouse_inward: number = 0;
    dispatch_qty: number = 0;
    dispatch_wip: number = 0;
    balance: number = 0;

    DespatchKpiData(wid_data: any) {
        this.widClicked = true;
        this.FilterData.wid_data = wid_data;

        this.HttpService.postData('dashboard/DespatchKpiData', this.FilterData).subscribe((res: any) => {
            this.warehouse_inward = res.result.desp.warehouse_inward;
            this.dispatch_qty = res.result.desp.dispatch_qty;
            this.dispatch_wip = res.result.desp.dispatch_wip;
            this.balance = res.result.desp.balance;
        });
    }

    despacth_data: any = [];
    DespatchWipClicked: boolean = false;
    DespatchKpiDetail(wid_data: any) {
        if (wid_data === 'despatch_wip') {
            this.DespatchWipClicked = true;
            console.log(this.DespatchWipClicked);
            this.HttpService.postData('dashboard/DespatchKpiDet', this.FilterData).subscribe((response: any) => {
                this.despacth_data = response.result;
                this.despatchWipSource = new MatTableDataSource(this.despacth_data);
                this.despatchWipSource.paginator = this.paginator;
                this.despatchWipSource.sort = this.sort;

            });
        }
    }


    isGroup(index: any, item: any): boolean {
        return item.floor_id;
    }

    spans = [];

    getRowSpan(col: any, index: any) {
        console.log(index);
        console.log(col);
        console.log(this.spans[index] && this.spans[index][col]);
        return this.spans[index] && this.spans[index][col];
    }


    cacheSpan(key: any, accessor: any) {
        for (let i = 0; i < this.cut_fab_utlz_data.length;) {
            let currentValue = accessor(this.cut_fab_utlz_data[i]);
            let count = 1;

            // Iterate through the remaining rows to see how many match
            // the current value as retrieved through the accessor.
            for (let j = i + 1; j < this.cut_fab_utlz_data.length; j++) {
                if (currentValue != accessor(this.cut_fab_utlz_data[j])) {
                    break;
                }

                count++;
            }

            //   if (!this.spans[i]) {
            //     this.spans[i] = {};
            //   }

            //   // Store the number of similar values that were found (the span)
            //   // and skip i to the next unique row.
            //   this.spans[i][key] = count;
            //   i += count;
        }
    }


    ngOnDestroy() { };

}
