	</div> <!-- /.workarea -->
	<div class="footer">
		<div class="container">
			<div class="row">
				<div class="copy-box col l4 m4 s12">
					&copy;Premier мебель, 2015
				</div>
				<div class="soc-box col l4 m4 s12 center">
					<a class="soc-link" href="#" target="_blank"><svg class="icon"><use xlink:href="#vk"/></svg></a>
					<a class="soc-link" href="#" target="_blank"><svg class="icon"><use xlink:href="#inst"/></svg></a>
					<a class="soc-link" href="#" target="_blank"><svg class="icon"><use xlink:href="#fb"/></svg></a>
				</div>
				<div class="dev-box col l4 m4 s12">
					Разработка сайта <a href="http://legacystudio.ru" target="_blank">Legacy</a>
				</div>
			</div>
		</div>
	</div>
</div> <!-- /.page -->
<div class="modal-dark-bg dark-bg"></div>
<!-- форма -->
<div class="modal big-modal fixed-form" id="order-form">
	<button class="btn btn-icon btn-close btn-close-modal"><svg class="icon"><use xlink:href="#close"/></svg></button>
	<div class="modal-inner">
		<div class="order-form-box container">
			<form novalidate>
				<div class="box-title center-align">Оставить заявку</div>
				<div class="box-note-text center-align">Оставте заявку и в течение 12 часов мы с вами свяжемся.</div>
				<br/>
				<div class="row">
					<div class="col s12 m8 l6 center">
						<div class="field">
							<input type="text" id="name" required />
							<label for="name" class="textfield-placeholder">Ваше Имя</label>
						</div>
						<div class="field">
							<input type="tel" id="tel" required />
							<label for="tel" class="textfield-placeholder">Ваш телефон</label>
						</div>
						<div class="field">
							<div class="dropdown-box">
								<div class="dropdown-value">
									<div class="item-text-placeholder">Удобное время для звонка</div>
									<div class="item-text"></div>
									<div class="triangle"><svg class="icon"><use xlink:href="#select-arr"/></svg></div>
								</div>
								<ul class="dropdown-list">
									<li class="dropdown-item">
										<input type="radio" class="dropdown-inp" name="otime" value="v1" id="otime-rad-v1" data-value-text="9:00 — 12:00"/>
										<label class="dropdown-title" for="otime-rad-v1">
											<div class="item-text">9:00 — 12:00</div>
										</label>
									</li>
									<li class="dropdown-item">
										<input type="radio" class="dropdown-inp" name="otime" value="v2" id="otime-rad-v2" data-value-text="12:00 — 17:00"/>
										<label class="dropdown-title" for="otime-rad-v2">
											<div class="item-text">12:00 — 17:00</div>
										</label>
									</li>
									<li class="dropdown-item">
										<input type="radio" class="dropdown-inp" name="otime" value="v3" id="otime-rad-v3" data-value-text="17:00 — 20:00"/>
										<label class="dropdown-title" for="otime-rad-v3">
											<div class="item-text">17:00 — 20:00</div>
										</label>
									</li>
								</ul>
							</div>
						</div>
						<div class="field">
							<textarea id="comment"></textarea>
							<label for="comment" class="textfield-placeholder">Комментарий</label>
						</div>
					</div>
				</div>
				<input type="submit" class="btn center" value="Отправить"/>
				<!--button class="btn primary mediumwidth center">Отправить</button-->
			</form>
		</div>
	</div>
</div>
<div class="modal big-modal fixed-form" id="consult-form">
	<button class="btn btn-icon btn-close btn-close-modal"><svg class="icon"><use xlink:href="#close"/></svg></button>
	<div class="modal-inner">
		<div class="order-form-box container">
			<form novalidate>
				<div class="box-title center-align">Получить консультацию</div>
				<div class="box-note-text center-align">Оставте заявку и в течение 12 часов мы с вами свяжемся.</div>
				<br/>
				<div class="row">
					<div class="col s12 m8 l6 center">
						<div class="field">
							<input type="text" id="name" required />
							<label for="name" class="textfield-placeholder">Ваше Имя</label>
						</div>
						<div class="field">
							<input type="tel" id="tel" required />
							<label for="tel" class="textfield-placeholder">Ваш телефон</label>
						</div>
						<div class="field">
							<div class="dropdown-box">
								<div class="dropdown-value">
									<div class="item-text-placeholder">Удобное время для звонка</div>
									<div class="item-text"></div>
									<div class="triangle"><svg class="icon"><use xlink:href="#select-arr"/></svg></div>
								</div>
								<ul class="dropdown-list">
									<li class="dropdown-item">
										<input type="radio" class="dropdown-inp" name="ctime" value="v1" id="ctime-rad-v1" data-value-text="9:00 — 12:00"/>
										<label class="dropdown-title" for="ctime-rad-v1">
											<div class="item-text">9:00 — 12:00</div>
										</label>
									</li>
									<li class="dropdown-item">
										<input type="radio" class="dropdown-inp" name="ctime" value="v2" id="ctime-rad-v2" data-value-text="12:00 — 17:00"/>
										<label class="dropdown-title" for="ctime-rad-v2">
											<div class="item-text">12:00 — 17:00</div>
										</label>
									</li>
									<li class="dropdown-item">
										<input type="radio" class="dropdown-inp" name="ctime" value="v3" id="ctime-rad-v3" data-value-text="17:00 — 20:00"/>
										<label class="dropdown-title" for="ctime-rad-v3">
											<div class="item-text">17:00 — 20:00</div>
										</label>
									</li>
								</ul>
							</div>
						</div>
						<div class="field">
							<textarea id="comment"></textarea>
							<label for="comment" class="textfield-placeholder">Комментарий</label>
						</div>
					</div>
				</div>
				<input type="submit" class="btn center" value="Отправить"/>
				<!--button class="btn primary mediumwidth center">Отправить</button-->
			</form>
		</div>
	</div>
</div>
<!-- ответ формы -->
<div class="modal big-modal fixed-form" id="success-form">
	<button class="btn btn-icon btn-close btn-close-modal"><svg class="icon"><use xlink:href="#close"/></svg></button>
	<div class="modal-inner valign-wrapper">
		<div class="box-title valign center-align">Ваша заявка принята!</div>
	</div>
</div>
<!-- /ответ форм -->
<!-- тренды -->
<div class="modal medium-modal scrollto-form" id="trends">
	<button class="btn btn-icon btn-close btn-close-modal"><svg class="icon"><use xlink:href="#close"/></svg></button>
	<div class="modal-inner">
		<div class="trends-page">
			<h1 class="box-title">Тренды в дизайне кухни в 2016 году</h1>
			<h2>1. Нейтральные цвета.</h2>
			<p><img src="images/content/trend-1.jpg"/></p>
			<p>Яркие кухни - сами по себе модное заявление, а вот сдержанные - идеальный фон для более продуманного дизайна. Сочетание черного и белого, серый, бежевый и песочный - цветовые решения вне времени и моды, поэтому такая тенденция не на один сезон.</p>
			<h2>2. Оптимизация полезного простраства.</h2>
			<p><img src="images/content/trend-2.jpg"/></p>
			<p>Актуальны в этом сезоне удобные ящики - горизонтальные и вертикальные, с разделителями и особым местом для буквально каждого столового прибора. Вращающиеся подставки для банок, эргономичные решения для посуды и специй, губок и моющих средств. Модная кухня - это кухня, где все на своем месте.</p>
		</div>
	</div>
</div>
</div> <!-- /.layout -->
</body>
</html>