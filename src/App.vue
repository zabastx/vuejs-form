<template>
    <main>
        <h1>Создание клиента</h1>
        <form @submit.prevent="submit">
            <label class="inline-label left">Фамилия*<input v-model.trim='lastName' :class="status($v.lastName)" @blur="$v.lastName.$touch" />
            <span :class="status($v.lastName)">Обязательное поле</span>
            </label>
            <label class="inline-label">Имя*<input v-model.trim='firstName' :class="status($v.firstName)" @blur="$v.firstName.$touch" />
            <span :class="status($v.firstName)">Обязательное поле</span>
            </label>
            <label>Отчество</label>
            <input type="text" v-model.trim='patronym' />
            <div class='inline'>
                <label>Дата рождения*<input type="date" v-model='birthDate' :class="status($v.birthDate)" @blur="$v.birthDate.$touch" /></label>
                <span :class="status($v.birthDate)">Обязательное поле</span>
                <span class="error" v-show="$v.birthDate.required && !$v.birthDate.correctDate">Некорректная дата</span>
            </div>
            <div class='inline radio'>
                <h3>Пол</h3>
                <label><input type="radio" v-model="gender" value="M" name="gender" />Мужской</label>
                <label><input type="radio" v-model="gender" value="F" name="gender" />Женский</label>
            </div>
            <label>Номер телефона*</label>
            <input type="tel" v-model="tel" @blur="$v.tel.$touch" :class="status($v.tel)"/>
            <span :class="status($v.tel)" v-show="!$v.tel.required && !$v.tel.correctTel">Обязательное поле</span>
            <span class="error" v-show="$v.tel.required && !$v.tel.correctTel">11 цифр. Начинается с 7</span>
            <label>Группа клиентов*</label>
            <div class="multiselect">
                <div class="selectBox" @click="showOptions">
                <select :style="selStyle">
                    <option></option>
                </select>
                <div class="overSelect" :class="status($v.clientGroups)" @blur="$v.clientGroups.$touch" :style="bgText"></div>
                </div>
                <div class="options" v-bind:style="{ display: multiCheckDisplay }">
                <label><input type="checkbox" value="VIP" v-model="clientGroups" />VIP</label>
                <label><input type="checkbox" value="Проблемные" v-model="clientGroups" />Проблемные</label>
                <label><input type="checkbox" value="ОМС" v-model="clientGroups" />ОМС</label>
                </div>
            </div>
            <span v-show="!$v.clientGroups.required">Обязательное поле</span>
            <label>Лечащий врач</label>
            <select v-model="doctor" >
                <option>Иванов</option>
                <option>Захаров</option>
                <option>Чернышева</option>
            </select>
            <label><input type="checkbox" v-model="sms"/>Не отправлять смс</label>
            <h2>Адрес</h2>
            <label class="inline-label left">Индекс<input v-model="address.index" />
            <span v-show="!$v.lastName.required">Обязательное поле</span>
            </label>
            <label class="inline-label">Страна<input v-model="address.сountry" />
            <span v-show="!$v.lastName.required">Обязательное поле</span>
            </label>
            <label class="inline-label left">Область<input v-model="address.region" />
            <span v-show="!$v.lastName.required">Обязательное поле</span>
            </label>
            <label class="inline-label">Город*<input v-model="address.city" :class="status($v.address.city)" @blur="$v.address.city.$touch" />
            <span :class="status($v.address.city)">Обязательное поле</span>
            </label>
            <label class="inline-label left">Улица<input v-model="address.street" />
            <span v-show="!$v.lastName.required">Обязательное поле</span>
            </label>
            <label class="inline-label">Дом<input type="number" min="1" v-model="address.houseNum" />
            <span v-show="!$v.lastName.required">Обязательное поле</span>
            </label>
            <h2>Паспорт</h2>
            <label>Тип документа*</label>
            <select v-model="id.docType" :class="status($v.id.docType)" @blur="$v.id.docType.$touch" >
                <option>Паспорт</option>
                <option>Свидетельство о рождении</option>
                <option>Вод. удостоверение</option>
            </select>
            <span :class="status($v.id.docType)">Обязательное поле</span>
            <label class="inline-label left">Серия<input v-model="id.series" :class="status($v.id.series)" @blur="$v.id.series.$touch" />
            <span :class="status($v.id.series)">Только цифры</span>
            </label>
            <label class="inline-label">Номер<input v-model="id.num" :class="status($v.id.num)" @blur="$v.id.num.$touch" />
            <span :class="status($v.id.num)">Только цифры</span>
            </label>
            <label class="inline-label left">Кем выдан<input v-model="id.giver" />
            <span v-show="!$v.lastName.required">Обязательное поле</span>
            </label>
            <label class="inline-label">Дата выдачи*
                <input type="date" v-model="id.date" :class="status($v.id.date)" @blur="$v.id.date.$touch" />
                <span :class="status($v.id.date)">Обязательное поле</span>
                <span class="error" v-show="$v.id.date.required && !$v.id.date.correctDate">Некорректная дата</span>
            </label>
            <p>* обязательные поля</p>
            <button type='submit' :disabled="$v.$invalid" >Отправить</button>
        </form>
        <aside v-bind:style="msgStyle">
            <h1>Новый клиент успешно создан</h1>
            <button @click="hideMsg">OK</button>
        </aside>
    </main>
</template>

<script src="./app.js" />

<style lang="scss" src="./app.scss" />