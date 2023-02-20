import { Form, Input } from 'cheesi';
import * as React from 'react';
function Required() {
  return (
    <>
      <Form>
        <Form.Item name="test1" rules={[{ required: true }]} initialValue="abc">
          <Input placeholder="必需项，显示*号" />
        </Form.Item>
        <Form.Item
          name="test2"
          initialValue="bamboo"
          required={true}
          hideRequired
        >
          <Input placeholder="必需项，但不显示*号" />
        </Form.Item>
      </Form>
      ,
    </>
  );
}
export default Required;
