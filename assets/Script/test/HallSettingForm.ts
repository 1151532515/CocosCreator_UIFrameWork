import { UIFormLucenyType, UIFormShowMode, UIFormType } from "../UIFrame/config/SysDefine";
import BaseUIForm from "../UIFrame/BaseUIForm";
import { UIType, MaskType } from "../UIFrame/FormType";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HallSettingForm extends BaseUIForm {

    UIType = new UIType(UIFormType.PopUp, UIFormShowMode.ReverseChange, UIFormLucenyType.Translucence);

    @property(cc.Node)
    CloseNode: cc.Node= null;


    startPosition: cc.Vec2;

    init(obj: any) {
        this.startPosition = this.node.convertToNodeSpaceAR(obj.startPosition);
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.CloseNode.on('click', () => {
            this.closeUIForm();
        }, this)
    } 

    showPopUpAnimation(callBack: Function) {
        this.node.scale = 0;
        this.node.setPosition(this.startPosition);
        cc.tween(this.node)
        .to(0.3, {scale:1, position:cc.v2(0,0)})
        .call(() => {
            // 显示mask
            callBack();
        })
        .start();
    }

    hidePopUpAnimation(callBack: Function) {
        callBack();
    }

    // update (dt) {}
}
