import { LightningElement, track } from 'lwc';
export default class ParentDemo extends LightningElement {

    @track
    childs = [{title:'Child One', status:'DeSelect'}, {title:'Child Two', status:'DeSelect'}, {title:'Child Three', status:'DeSelect'}];

    handleChildClick(event)
    {
        let child = event.detail.childTitleName;

        this.childs.forEach(element => {
            
            if(child == element.title)
            {
                element.status = event.detail.status;                
            }
        });
    }
}