# 表单

本项目的表单采用动态表单设计。

## 创建表单组件

```bash
ng generate component your-form
```

## 表单组件设计

### 引入表单基本模型和服务

```typescript
import { FormItemBase } from '@adming/components/form-item/form-item-base';
import { FormItemControlService } from '@adming/services/form/form-item-control.service';
```

### 为表单创建 formGroup

```typescript
export class FormComponent implements OnInit {
  admingForm: FormGroup;
}
```

### 创建表单项

```typescript
inputItem1: FormItemBase<string>;
inputItem2: FormItemBase<number>;
selectItem: FormItemBase<string>;
```

## 表单模板结构

```html
<div class="form-container">
  <form class="common" [formGroup]="admingForm" (ngSubmit)="onSubmit()">
    <div class="form-row">
      <app-form-item [form]="admingForm" [formItem]="inputItem1"></app-form-item>
      <app-form-item [form]="admingForm" [formItem]="inputItem2"></app-form-item>
      <app-form-item [form]="admingForm" [formItem]="selectItem"></app-form-item>
    </div>
    <div class="button-group content-center">
        <button class="btn-function" type="submit" [disabled]="!admingForm.valid">Show</button>
    </div>
  </form>
</div>
```
