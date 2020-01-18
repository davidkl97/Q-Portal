import { Workflow } from './Workflow';

export interface AWXWorkflow{
    workflow: Workflow
    template_id: number;
    extra_vars: Array<any>;
}