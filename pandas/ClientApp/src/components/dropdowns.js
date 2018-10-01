import { Input } from 'antd';
import React from 'react';
import { Menu, Dropdown, Button, Icon, message } from 'antd';

const Search = Input.Search;
function handleButtonClick(e) {
	message.info('Click on left button.');
	console.log('click left button', e);
}

function handleMenuClick(e) {
	message.info('Click on menu item.');
	console.log('click', e);
}

const menu = (
	<Menu onClick={handleMenuClick}>
		<Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
		<Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
		<Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
	</Menu>
);

class BtnDropDowns extends React.Component {

	render() {
		return (
			<div class="mx-auto w-50">
				<ul class="list-inline ulDp">
					<div className="ItemSearch"><Search
						placeholder="Search for Organization"
						onSearch={value => console.log(value)}
						enterButton
					/></div>
					<br />
					<li class="list-inline-item">
						<Dropdown overlay={menu}>
							<Button style={{ marginLeft: 8}}>
								State <Icon type="down" />
							</Button>
						</Dropdown>
					</li>
					<li class="list-inline-item">
						<Dropdown overlay={menu}>
							<Button style={{ marginLeft: 8}}>
								County <Icon type="down" />
							</Button>
						</Dropdown>
					</li>
					<li class="list-inline-item">
						<Dropdown overlay={menu}>
							<Button style={{ marginLeft: 8}}>
								Category <Icon type="down" />
							</Button>
						</Dropdown>
					</li>
					<li class="list-inline-item">
						<Search
							placeholder="Search Items"
							onSearch={value => console.log(value)}
							style={{ width: 200 }}
						/>
					</li>
				</ul>
			</div>
			
			
		)
	}
}
export default BtnDropDowns;