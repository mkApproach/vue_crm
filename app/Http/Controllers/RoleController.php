<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    /*
    public function __invoke(Request $request)
    {
        $roles = \App\Models\Role::get(); // 役職一覧を取得
        return view('roles.index', compact('roles'));  // $roles一覧情報を渡して roles./index.blade.phpを呼びます
    }
    */
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return view('roles.index');
     /*   $roles = \App\Models\Role::get(); // 役職一覧を取得
        return view('roles.index', compact('roles'));  // $roles一覧情報を渡して roles./index.blade.phpを呼びます
     */   
     }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('roles.create');
    }

    public function createnew(Request $request)
    {
        $attribute = request()->validate(
            [
            'name' => ['required', 'min:3', 'max:32'],
            'memo' => ['required',],
            ],
            [
                'name.min' => '3桁以上入力して下さい。',
                'name.required' => '役職cdは必須項目です。',
                'memo.required'  => '役職名は必須項目です。',
            ]
        );
        Role::create($attribute);
        return redirect('/roles');
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $attribute = request()->validate([
        'name' => ['required', 'min:3', 'max:32'],
        'memo' => ['required',],
        ]);
        $role = Role::create($attribute);
        return redirect('/roles');
    }

    public function update(Request $request)
    {
        $attribute = request()->validate([
            'name' => ['required', 'min:3', 'max:32'],
            'memo' => ['required',],
        ]);
        Role::where("id", $request->id)->update([
            "name" => $request->name,
            "memo" => $request->memo,
        ]);
    }

    public function delete($id)
    {
        Role::where("id", $id)->delete();
    }

    public function json($id = -1)
    {
        if ($id == -1)
        {
            return \App\Models\Role::get()->toJson();
        }
        else
        {
            return Role::find($id)->toJson();
        }
    }

    public function read()
    {
        $data = \App\Models\Role::get();
        return $data;
    }

}
