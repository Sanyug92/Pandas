import { Card, Icon, Avatar } from 'antd';
import React from 'react';
const { Meta } = Card;

class Cards extends React.Component {
	render() {
		return (
			<div id="wrapper">
				<ul class="list-inline">
					<li class="list-inline-item">
						<Card
						style={{ width: 350 }}
						cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
						actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
						<Meta
							avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
							title="Card title"
							description="This is the description" />
					    </Card>
					</li>
					<li class="list-inline-item">
						<Card
							style={{ width: 350 }}
							cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
							actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
							<Meta
								avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
								title="Card title"
								description="This is the description" />
						</Card>
					</li>
					<li class="list-inline-item">
						<Card
							style={{ width: 350 }}
							cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
							actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
							<Meta
								avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
								title="Card title"
								description="This is the description" />
						</Card>
					</li>
					<li class="list-inline-item">
						<Card
							style={{ width: 350 }}
							cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
							actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
							<Meta
								avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
								title="Card title"
								description="This is the description" />
						</Card>
					</li>
				</ul>
				
			</div>
		)
	}
}

export default Cards;