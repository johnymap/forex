@extends('forex.layout')
@section('content')
    <div class="container" ng-app="todoApp" ng-controller="todoController">
        <h1>Available Currencies</h1>
        <div class="row">
            <div class="col-md-4">
                <input type='text' ng-model="todo.title">
                <button class="btn btn-primary btn-md"  ng-click="addOrder()">Buy</button>
                <i ng-show="loading" class="fa fa-spinner fa-spin"></i>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-md-4">
                <table class="table table-striped">
                    <tr ng-repeat='todo in todos'>
                        <td><input type="checkbox" ng-true-value="1" ng-false-value="'0'" ng-model="forex.done" ng-change="updateForex(forex)"></td>
                        <td><% forex.code %></td>
                        <td><button class="btn btn-danger btn-xs" ng-click="deleteForex($index)">  <span class="glyphicon glyphicon-trash" ></span></button></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>